#!/usr/bin/env bash

repo_uri="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/cv-page.git"
remote_name="origin"
main_branch="master"
target_branch="gh-pages"
build_dir="./build"

cd "${GITHUB_WORKSPACE}"

touch ./build/CNAME
echo "${GH_PAGE_CNAME}" >> ./build/CNAME

git config user.name "${GITHUB_USER}"
git config user.email "${GITHUB_USER_EMAIL}"

git add "${build_dir}" -f

git commit -m "updated GitHub Pages"
if [ $? -ne 0 ]; then
    echo "nothing to commit"
    exit 0
fi

git remote set-url "$remote_name" "$repo_uri" # includes access token
git push --force-with-lease "$remote_name" "$target_branch"