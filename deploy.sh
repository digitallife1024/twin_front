#!/bin/sh

set -e

npm run build

cd dist

git init 
git add -A 

git commit -m "new Deployment"

git push -f git@github.com:digitallife1024/twinfront.git master:twin-v1-beta

cd -