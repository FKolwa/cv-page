#!/usr/bin/env bash

set -eu

git config user.name "$GITHUB_USER"
git config user.email "${GITHUB_USER_EMAIL}"

npm run build
