cd ../
echo 'Building dist...'
# clear and prepare dist
npx rimraf ./dist
mkdir ./dist

mkdir ./dist/aircash-frontend
mkdir ./dist/aircash-frontend/.next

mkdir ./dist/aircash-scripts

mkdir ./dist/compose

# add config files
cp -rf package.json ./dist
cp -rf aircash-frontend/package.json ./dist/aircash-frontend

cp -rf docker-compose.prod.yaml ./dist/docker-compose.yaml
cp -rf .dockerignore ./dist/.dockerignore

cp -rf .nvmrc ./dist/.nvmrc

# add app modules
cp -rf aircash-scripts/* ./dist/aircash-scripts
cp -rf aircash-frontend/.next/* ./dist/aircash-frontend/.next/
cp -rf compose ./dist
