#!/usr/bin/env bash
# Sync upstream XR Animator into this fork.
#
#   tools/sync-upstream.sh            # fetch + report divergence & conflict surface (no changes)
#   tools/sync-upstream.sh --merge    # create sync/upstream-YYYYMMDD and merge upstream/master
#
# Env: UPSTREAM (default: upstream)
set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO"
UPSTREAM="${UPSTREAM:-upstream}"

git fetch "$UPSTREAM" --prune --tags

base="$(git merge-base master "$UPSTREAM/master")"
ahead="$(git rev-list --count "$UPSTREAM/master..master")"
behind="$(git rev-list --count "master..$UPSTREAM/master")"

echo "upstream/$UPSTREAM = $(git log -1 --format='%h %ci %s' "$UPSTREAM/master")"
echo "ahead=$ahead  behind=$behind  merge-base=$(git rev-parse --short "$base")"

if [ "$behind" -eq 0 ]; then
  echo "Up to date with upstream."
  exit 0
fi

echo
echo "New upstream commits:"
git log --oneline "master..$UPSTREAM/master" | head -20

echo
echo "Conflict surface (files changed on BOTH sides since merge-base):"
comm -12 \
  <(git diff --name-only "$base..master" | sort -u) \
  <(git diff --name-only "$base..$UPSTREAM/master" | sort -u) || true

if [ "${1:-}" != "--merge" ]; then
  echo
  echo "Re-run with --merge to create a sync branch and merge."
  exit 0
fi

br="sync/upstream-$(date +%Y%m%d)"
git switch -c "$br"
if git merge --no-ff "$UPSTREAM/master"; then
  echo "Merged upstream cleanly on '$br'. Review, then merge '$br' into master."
else
  echo "Conflicts on '$br'. Resolve these, then commit:"
  git diff --name-only --diff-filter=U
fi
