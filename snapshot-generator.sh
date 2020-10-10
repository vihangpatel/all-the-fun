yarn
yarn build
yarn kill
PORT=7070 yarn start &
sleep 15s
curl -K http://localhost:7070 -o public/index.html
