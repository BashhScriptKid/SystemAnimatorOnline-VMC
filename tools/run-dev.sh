#!/usr/bin/env bash
# Dev loop for XR Animator VMC.
#
# The app now runs via the absorbed Python launcher: a local HTTP server
# (xr_server.py) serving the frontend, with the native MediaPipe backend.
# Open the printed URL in a browser (or it auto-opens), or pass --no-browser.
#
#   tools/run-dev.sh [xr_launcher args...]     e.g. --no-browser --port 8000
#
# Python selection: $XRA_PYTHON, else ./.venv/bin/python, else python3.
# Requires: mediapipe + opencv in that interpreter.
set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"
PYTHON="${XRA_PYTHON:-}"
if [ -z "$PYTHON" ]; then
  if [ -x "$REPO/.venv/bin/python" ]; then PYTHON="$REPO/.venv/bin/python"; else PYTHON="python3"; fi
fi

if ! "$PYTHON" -c "import mediapipe, cv2" 2>/dev/null; then
  echo "Native backend deps missing for: $PYTHON" >&2
  echo "Create a venv and install them, then re-run:" >&2
  echo "  python3 -m venv \"$REPO/.venv\" && \"$REPO/.venv/bin/pip\" install mediapipe opencv-python-headless" >&2
  echo "Or set XRA_PYTHON=/path/to/python-with-mediapipe" >&2
  exit 1
fi

cd "$REPO"

# Rebuild the Svelte control surface so the dev server never serves a stale
# bundle (a stale bundle once leaked its runtime onto window and broke jQuery).
# Set XRA_SKIP_UI_BUILD=1 to skip during UI iteration against `npm run dev`.
if [ "${XRA_SKIP_UI_BUILD:-0}" != "1" ] && command -v npm >/dev/null 2>&1; then
  echo "building UI bundle: npm --prefix ui run build"
  ( cd "$REPO/ui" && npm run build )
fi

echo "launcher: $PYTHON xr_launcher.py $*"
exec "$PYTHON" xr_launcher.py "$@"
