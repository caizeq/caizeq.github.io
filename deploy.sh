# 确保脚本抛出遇到的错误
set -e
npm run docs:build && cd docs/.vuepress/dist
# github && 码云
git init
git add -A
# date=`date +%Y-%m-%d_%H:%M:%S`
git commit -m "deploy"
git checkout -b dev
git push -f https://gitee.com/caizq/vuepress.git dev
# rm -rf docs/.vuepress/dist
# cd -
@pause



