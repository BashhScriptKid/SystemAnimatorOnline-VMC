#!/usr/bin/env bash
set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"
ELECTRON="${ELECTRON:-$HOME/Applications/XR-Animator_v0.28.0_linux-x64/XR Animator - electron-v32.0.1-linux-x64_SA/electron}"
RUNDIR="${RUNDIR:-/tmp/opencode/rundir}"

if [ ! -x "$ELECTRON" ]; then
  echo "electron not found: $ELECTRON" >&2
  echo "set ELECTRON=/path/to/electron" >&2
  exit 1
fi

mkdir -p "$RUNDIR"
printf '%s' "$REPO/SystemAnimator_webkit.html" > "$RUNDIR/SystemAnimator_path.txt"

cd "$RUNDIR"
echo "app: $REPO"
exec "$ELECTRON"
