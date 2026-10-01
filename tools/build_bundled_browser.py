#!/usr/bin/env python3
"""Build a Linux package with its own NW.js/Chromium browser."""

from __future__ import annotations

from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile


ROOT = Path(__file__).resolve().parents[1]
BASE_RELEASE = ROOT / "release" / "XR_Animator"
TARGET = ROOT / "release" / "XR_Animator_Bundled"
NW_RUNTIME = ROOT / "cache" / "nwjs-v0.115.0-linux-x64"
NW_PACKAGE = ROOT / "packaging" / "nw"
RUNTIME_DIRNAME = "runtime"

# These paths are created or edited by the packaged application.  A rebuild
# replaces the bundle, but must not silently replace the user's local state.
PERSISTENT_PATHS = (
    "xra_profile.json",
    "xra_profile.backup.json",
    "avatars",
    "backgrounds",
    "props",
    "stages",
    "recordings",
    "tracking_logs",
    ".xra_recording_sessions",
)

# Some distro-provided libraries embed the packager's absolute home directory
# in C assertion messages. Keep replacements exactly the same length so
# sanitizing the already-linked ELF files cannot move any data.
EMBEDDED_HOME_PATH = re.compile(rb"/home/[^/\x00]+/")


def sanitize_embedded_build_paths(bundle: Path) -> int:
    """Remove private build-machine paths without changing binary sizes."""
    replacements = 0

    def neutral_path(match: re.Match[bytes]) -> bytes:
        private = match.group(0)
        neutral = b"/build/" + (b"_" * (len(private) - len(b"/build/")))
        if len(private) != len(neutral):
            raise RuntimeError("Embedded-path replacements must preserve length")
        return neutral

    for path in bundle.rglob("*"):
        if not path.is_file() or path.is_symlink():
            continue
        contents = path.read_bytes()
        if not contents.startswith(b"\x7fELF"):
            continue
        sanitized, occurrences = EMBEDDED_HOME_PATH.subn(neutral_path, contents)
        replacements += occurrences
        if sanitized != contents:
            path.write_bytes(sanitized)
    return replacements


def snapshot_user_data(staging: Path) -> None:
    if not TARGET.is_dir():
        return
    for name in PERSISTENT_PATHS:
        root_source = TARGET / name
        runtime_source = TARGET / RUNTIME_DIRNAME / name
        source = root_source if root_source.exists() else runtime_source
        destination = staging / name
        if source.is_dir():
            shutil.copytree(source, destination, symlinks=True)
        elif source.is_file():
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, destination)


def restore_user_data(staging: Path) -> None:
    for name in PERSISTENT_PATHS:
        source = staging / name
        destination = TARGET / name
        if source.is_dir():
            shutil.copytree(source, destination, dirs_exist_ok=True, symlinks=True)
        elif source.is_file():
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, destination)


def organize_runtime() -> Path:
    """Keep the public bundle root limited to launcher, profile and runtime."""
    runtime = TARGET / RUNTIME_DIRNAME
    runtime.mkdir(exist_ok=True)
    for item in tuple(TARGET.iterdir()):
        if item.name in {"XR_Animator", "xra_profile.json", RUNTIME_DIRNAME}:
            continue
        shutil.move(str(item), runtime / item.name)
    return runtime


def copy_runtime() -> None:
    for name in (
        "chrome_crashpad_handler", "credits.html", "icudtl.dat",
        "nw_100_percent.pak", "nw_200_percent.pak", "resources.pak",
        "v8_context_snapshot.bin",
    ):
        shutil.copy2(NW_RUNTIME / name, TARGET / name)
    for name in ("lib", "swiftshader"):
        shutil.copytree(NW_RUNTIME / name, TARGET / name, dirs_exist_ok=True)

    locales = TARGET / "locales"
    locales.mkdir(exist_ok=True)
    for name in ("it.pak", "en-US.pak"):
        shutil.copy2(NW_RUNTIME / "locales" / name, locales / name)


def main() -> int:
    if not NW_RUNTIME.is_dir():
        raise SystemExit(
            "Runtime NW.js non trovato in cache/nwjs-v0.115.0-linux-x64. "
            "Scarica la build Linux x64 prima di creare il bundle."
        )

    completed = subprocess.run([sys.executable, str(ROOT / "tools" / "build_release.py")], cwd=ROOT)
    if completed.returncode:
        return completed.returncode

    (ROOT / "release").mkdir(exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="xra-user-data-", dir=ROOT / "release") as temporary:
        staging = Path(temporary)
        snapshot_user_data(staging)
        if TARGET.exists():
            shutil.rmtree(TARGET)
        shutil.copytree(BASE_RELEASE, TARGET)
        restore_user_data(staging)
        # Refresh repository-provided assets without deleting user imports.
        # These directories are persistent: clearing them here left profile
        # references (for example a selected VRM) pointing at files that the
        # rebuild had just removed, causing a 404 on the next startup.
        for asset_name in ("stages", "avatars", "backgrounds", "props"):
            root_asset = ROOT / asset_name
            target_asset = TARGET / asset_name
            if root_asset.is_dir():
                target_asset.mkdir(parents=True, exist_ok=True)
                for item in root_asset.glob("*"):
                    if item.is_file():
                        shutil.copy2(item, target_asset / item.name)

    bundled_server = TARGET / "XR_Animator"
    bundled_server.rename(TARGET / "xra_server")
    (TARGET / "package.json").unlink(missing_ok=True)
    copy_runtime()
    shutil.copytree(NW_PACKAGE, TARGET / "package.nw")
    shutil.copy2(NW_RUNTIME / "nw", TARGET / "xra_browser")
    bundled_launcher_src = ROOT / "tools" / "launcher.c"
    root_launcher_src = ROOT / "tools" / "root_launcher.c"
    subprocess.run(["gcc", "-O2", "-s", str(bundled_launcher_src), "-o", str(TARGET / "XR_Animator")], check=True)
    subprocess.run(["gcc", "-O2", "-s", str(root_launcher_src), "-o", str(ROOT / "XR_Animator")], check=True)

    # Clean up intermediate unbundled release so only the bundled build remains
    if BASE_RELEASE.exists():
        shutil.rmtree(BASE_RELEASE)

    for doc in ("LEGGIMI_PODCASTER.txt", "README_PODCASTER.txt", "xra_profile_example_low_spec.json"):
        src = ROOT / doc
        if src.is_file():
            shutil.copy2(src, TARGET / doc)

    runtime = organize_runtime()
    sanitized_paths = sanitize_embedded_build_paths(runtime)

    for executable in (
        TARGET / "XR_Animator", ROOT / "XR_Animator", runtime / "xra_browser",
        runtime / "xra_server", runtime / "chrome_crashpad_handler",
    ):
        executable.chmod(executable.stat().st_mode | 0o111)

    print(f"[XRA] Bundled browser ready: {TARGET / 'XR_Animator'}")
    print(f"[XRA] Root launcher ready (ELF double-click): {ROOT / 'XR_Animator'}")
    print(f"[XRA] Sanitized private build paths: {sanitized_paths}")
    print("[XRA] Chromium launched as shell; XR Animator runs on local HTTP.")
    print("[XRA] Intermediate unbundled folder removed: kept bundled build only.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
