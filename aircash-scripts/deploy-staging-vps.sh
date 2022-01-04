INSTALLATION_DIR = $1 or '/srv/microservices/aircash-staging'

cd $INSTALLATION_DIR

#remove old installation
systemctl stop aircash-ms
rm -rf ./app

mv ./dist ./app
#TODO:add docker build production-step
systemctl start aircash-ms


