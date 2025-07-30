#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
cd src/.vuepress/dist # 进入生成的文件夹

echo 'blog.zesionlee.cn' > CNAME

# deploy to github
msg='来自 https://github.com/zesion21/zesionlee.cn Actions '
githubUrl=https://zesion21:${GITHUB_TOKEN}@github.com/zesion21/zesion21.github.io.git
git config --global user.name "zesion21"
git config --global user.email "39211025+zesion21@users.noreply.github.com"
git config --global push.autoSetupRemote true

git init -b main 
git add -A
git commit -m "${msg}"
git push -f --set-upstream $githubUrl # 推送到github

cd -
rm -rf src/.vuepress/dist
