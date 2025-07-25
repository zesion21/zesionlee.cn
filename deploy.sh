#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd src/.vuepress/dist # 进入生成的文件夹

# deploy to github
msg='来自github action的自动部署'
githubUrl=https://zesion21:${GITHUB_TOKEN}@github.com/zesion21/zesion21.github.io.git
git config --global user.name "zesion21"
git config --global user.email "39211025+zesion21@users.noreply.github.com"

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd -
rm -rf src/.vuepress/dist
