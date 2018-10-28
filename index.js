const express = require('express')
const app = express()
const helmet = require('helmet')
const path = require('path')

// viewed at http://localhost:8080
app.use(helmet())
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/speakers', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/speakers.html'))
})

app.listen(8080, () => console.log('serving at http://localhost:8080'))
