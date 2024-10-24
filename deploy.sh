#!/bin/bash

# PRODUCTION
git checkout master

npm i yarn -g
yarn global add serve
yarn
yarn run build
pm2 start "yarn run start:prod" --name=BooksShop-React

# DEVELOPMENT
# npm i yarn -g
# yarn
# pm2 start "yarn run start" --name=ShoekerShop-React