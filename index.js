const express = require("express")
const app = express()
const helmet = require("helmet")
const path = require("path")

const reactor = require("./reactor")

console.log(__dirname)

app.use(helmet())
app.use(express.static(__dirname + "/public"))

app.get("/(:pageName)", (req, res) => {
	console.log("request coming here")
	reactor.renderToString(req, res)
})

app.get("/speakers", function(req, res) {
	res.sendFile(path.join(__dirname + "/public/speakers.html"))
})

app.listen(8080, () => console.log("serving at http://localhost:8080"))
