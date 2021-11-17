#!/usr/bin/env bash

set -eu

repo_uri="https://x-access-token:${GITHUB_ACCESS_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
remote_name="origin"
# main_branch="master"
main_branch="implementing-cd-pipeline" #just for testing
target_branch="gh-pages"
build_dir="./build"

cd "$GITHUB_WORKSPACE"

git config user.name "$GITHUB_ACTOR"
git config user.email "${GITHUB_ACTOR}@bots.github.com"


git checkout "$main_branch"
npm run build
npm run deploy
# git rebase "${remote_name}/${main_branch}"

# git add "$build_dir"

# git commit -m "updated GitHub Pages"
# if [ $? -ne 0 ]; then
#     echo "nothing to commit"
#     exit 0
# fi

# git remote set-url "$remote_name" "$repo_uri" # includes access token
# git push --force-with-lease "$remote_name" "$target_branch"