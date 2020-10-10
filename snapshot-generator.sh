yarn
yarn build
yarn kill
PORT=7070 yarn start &
sleep 10s
curl http://localhost:7070 -o public/index.html
yarn kill
