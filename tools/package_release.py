#!/usr/bin/env python3
"""Create a clean Linux release archive from the bundled application."""

from __future__ import annotations

import argparse
import hashlib
from pathlib import Path
import re
import shutil
import subprocess
import tempfile


ROOT = Path(__file__).resolve().parents[1]
BUNDLE = ROOT / "release" / "XR_Animator_Bundled"
ASSET_DIRS = ("avatars", "backgrounds", "props", "stages")
GENERATED_STATE = (
    ".nw-profile",
    ".xra_recording_sessions",
    "recordings",
    "tracking_logs",
    "xra_profile.backup.json",
)


def tracked_files(directory: str) -> list[Path]:
    result = subprocess.run(
        ["git", "ls-files", "-z", "--", directory],
        cwd=ROOT,
        capture_output=True,
        check=True,
    )
    return [Path(value) for value in result.stdout.decode().split("\0") if value]


def copy_default_assets(destination: Path) -> None:
    for directory in ASSET_DIRS:
        target = destination / "runtime" / directory
        shutil.rmtree(target, ignore_errors=True)
        target.mkdir(parents=True)
        for relative in tracked_files(directory):
            source = ROOT / relative
            if source.is_file():
                output = destination / "runtime" / relative
                output.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(source, output)


def remove_generated_state(destination: Path) -> None:
    runtime = destination / "runtime"
    for name in GENERATED_STATE:
        path = runtime / name
        if path.is_dir():
            shutil.rmtree(path)
        else:
            path.unlink(missing_ok=True)


def assert_clean(destination: Path) -> None:
    allowed_root = {"XR_Animator", "runtime", "xra_profile.json"}
    unexpected = sorted(path.name for path in destination.iterdir() if path.name not in allowed_root)
    if unexpected:
        raise SystemExit(f"Unexpected files in release root: {', '.join(unexpected)}")

    private_home = (str(Path.home()) + "/").encode()
    for path in destination.rglob("*"):
        if not path.is_file():
            continue
        contents = path.read_bytes()
        if private_home in contents:
            raise SystemExit(f"Private path leaked into release: {path.relative_to(destination)}")


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def archive(version: str) -> tuple[Path, str]:
    if not (BUNDLE / "XR_Animator").is_file() or not (BUNDLE / "runtime").is_dir():
        raise SystemExit("Bundled build missing or still uses the old flat layout; run ./build.sh first.")

    release_name = f"XRA_v{version}_Linux_x64"
    output = ROOT / "release" / f"{release_name}.zip"
    checksum_file = output.with_suffix(output.suffix + ".sha256")

    with tempfile.TemporaryDirectory(prefix="xra-release-", dir=ROOT / "release") as temporary:
        staging = Path(temporary) / release_name
        shutil.copytree(BUNDLE, staging)
        remove_generated_state(staging)
        copy_default_assets(staging)
        shutil.copy2(ROOT / "xra_profile.example.json", staging / "xra_profile.json")
        assert_clean(staging)

        output.unlink(missing_ok=True)
        subprocess.run(
            ["zip", "-q", "-9", "-r", str(output), release_name],
            cwd=staging.parent,
            check=True,
        )

    digest = sha256(output)
    checksum_file.write_text(f"{digest}  {output.name}\n", encoding="utf-8")
    return output, digest


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--version", required=True, help="release version only, for example 1.0.0")
    args = parser.parse_args()
    version = args.version.removeprefix("v")
    if not re.fullmatch(r"[0-9A-Za-z][0-9A-Za-z._-]*", version):
        parser.error("version may contain only letters, numbers, dots, underscores and hyphens")
    if shutil.which("zip") is None:
        parser.error("the 'zip' command is required to create the release archive")
    output, digest = archive(version)
    print(f"Archive: {output}")
    print(f"SHA256:  {digest}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
