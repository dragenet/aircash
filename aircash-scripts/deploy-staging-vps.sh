#!/bin/bash

# INSTALLATION_DIR= $1 or '/srv/microservices/aircash-staging'

cd $1

# remove old installation
#systemctl stop aircash-staging-ms
rm -rf app

# setup new installation
mv dist app
cd app

# prepare docker container and run
yarn docker:build-prod
#systemctl start aircash-staging-ms
docker-compose up

