const express = require("express")
const app = express()
const helmet = require("helmet")
const path = require("path")

const reactor = require("./index")

app.use(helmet())
app.use(express.static(path.join(__dirname, "..", "public")))

const requestHandler = (req, res) => reactor.renderToString(req, res)

app.get("*", requestHandler)

const server = app.listen(process.env.PORT || 8080, () => {
	const host = server.address().address
	const port = server.address().port
	console.log(`serving at ${host} & port : ${port}`)
})
