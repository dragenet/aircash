cd ../
npx rimraf ./dist
copy package.json ./dist
copy aircash-scripts/* ./dist
copy aircash-frontend/.next/* ./dist
copy aircash-frontend/package.json ./dist
copy docker-compose.prod.yaml ./dist