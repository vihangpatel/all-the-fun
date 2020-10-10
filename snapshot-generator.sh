yarn
yarn build
PORT=7070 yarn start &
echo "Server has started ... Let it spin at full speed"
echo "\n****"
echo "Waiting for 10 seconds ..."
sleep 10s
echo "Requesting localhost and saving snapshot"
curl http://localhost:7070 -o public/index.html
echo "Done !!!\n"
exit
