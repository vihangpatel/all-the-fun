const express = require("express")
const app = express()
const helmet = require("helmet")
const path = require("path")

const reactor = require("./index")

console.log(__dirname)

app.use(helmet())
app.use(express.static(path.join(__dirname, "..", "public")))

const requestHandler = (req, res) => reactor.renderToString(req, res)

app.get("/", requestHandler)
app.get("/(:pageName)", requestHandler)

app.get("/speakers", function(req, res) {
	res.sendFile(path.join(__dirname + "/public/speakers.html"))
})

const server = app.listen(process.env.PORT, () => {
	const host = server.address().address
	const port = server.address().port
	console.log(`serving at ${host} & port : ${port}`)
})
