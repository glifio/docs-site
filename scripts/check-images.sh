#!/usr/bin/env bash
#
# Check for orphaned and missing images across all apps.
# Exits 0 if clean, 1 if any issues found.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
errors=0

for app_dir in "$REPO_ROOT"/apps/*/; do
  app="$(basename "$app_dir")"
  docs_dir="$app_dir/docs"
  img_dir="$app_dir/public/docs/img"

  # Skip apps without a docs folder
  [[ -d "$docs_dir" ]] || continue

  # Collect referenced images from markdown (bare filenames, skip external URLs)
  referenced=$(grep -roh '!\[[^]]*\]([^)]*)' "$docs_dir" --include='*.md' \
    | sed 's/.*](//' | sed 's/)$//' \
    | grep -v '^https\?://' \
    | sort -u)

  # Collect actual image files (relative to img/ dir)
  if [[ -d "$img_dir" ]]; then
    actual=$(find "$img_dir" -type f -printf '%f\n' | sort -u)
  else
    actual=""
  fi

  # Compare
  missing=$(comm -23 <(echo "$referenced") <(echo "$actual"))
  orphaned=$(comm -13 <(echo "$referenced") <(echo "$actual"))

  # Report
  if [[ -n "$missing" || -n "$orphaned" ]]; then
    echo "=== $app ==="
    if [[ -n "$missing" ]]; then
      missing_count=$(echo "$missing" | wc -l)
      echo "  Missing images ($missing_count):"
      echo "$missing" | sed 's/^/    /'
      errors=1
    fi
    if [[ -n "$orphaned" ]]; then
      orphaned_count=$(echo "$orphaned" | wc -l)
      echo "  Orphaned images ($orphaned_count):"
      echo "$orphaned" | sed 's/^/    /'
      errors=1
    fi
    echo
  else
    echo "=== $app === OK"
  fi
done

if [[ "$errors" -eq 0 ]]; then
  echo "All apps clean."
else
  echo "Image integrity check failed."
fi

exit "$errors"
