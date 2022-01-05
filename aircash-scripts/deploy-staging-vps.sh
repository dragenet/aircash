#!/bin/bash

INSTALLATION_DIR=${1:-'/srv/microservices/aircash-staging'}

source ~/.bashrc

# system setup
nvm install --lts
npm install -g yarn

cd $INSTALLATION_DIR

# remove old installation
sudo systemctl stop aircash-staging-ms
rm -rf app

# setup new installation
mv dist app
cd app

# prepare docker container and run
yarn docker:build-staging
sudo systemctl enable ms-aircash-staging
sudo systemctl start ms-aircash-staging
# docker-compose -p aircash_staging up 

