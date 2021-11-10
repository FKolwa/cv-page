#!/usr/bin/env bash

repo_uri="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/cv-page.git"
remote_name="origin"
main_branch="master"
target_branch="gh-pages"
build_dir="./build"

cd "${GITHUB_WORKSPACE}"


git config user.name "${GITHUB_USER}"
git config user.email "${GITHUB_USER_EMAIL}"

git checkout "$target_branch"
git rebase "${remote_name}/${main_branch}"

npm run build

touch ./build/CNAME
echo "${GH_PAGE_CNAME}" >> ./build/CNAME

git add "${build_dir}" -f

git commit -m "Pipeline: updated GitHub Pages"
if [ $? -ne 0 ]; then
    echo "nothing to commit"
    exit 0
fi

git remote set-url "$remote_name" "$repo_uri" # includes access token
git push --force-with-lease "$remote_name" "$target_branch"