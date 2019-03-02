const express = require("express")
const app = express()
const helmet = require("helmet")
const path = require("path")
const redirectSSL = require("redirect-ssl")
const compression = require("compression")
const critical = require("critical")

const { renderAppToString } = require("./index")
const oneYear = 31557600000
app.use(helmet())

// Add middleware
app.use(redirectSSL)

app.use(compression())

app.use(function(req, res, next) {
	if (req.headers.accept && req.headers.accept.indexOf("text/html") > -1) {
		res.setHeader("Cache-Control", "no-cache, max-age=0, must-revalidate, no-store")
	}
	next()
})

if (process.env.ENV === "development") {
	app.use(express.static(path.join(__dirname, "..", "public"), { maxAge: oneYear }))
} else {
	app.use(express.static(path.join(__dirname, ".."), { maxAge: oneYear }))
}

let stringOutput = `<!DOCTYPE html>${renderAppToString("")}`
critical
	.generate({
		html: stringOutput,
		inline: true,
		base: "./public",
		dest: "index.html",
		height: 1500,
	})
	.then(content => {
		stringOutput = content.toString()
	})

const requestHandler = (req, res) => {
	res.send(renderAppToString(req.url))
}

app.get("/tickets", requestHandler)
app.get("/subscribe", requestHandler)
app.get("/", requestHandler)
app.get("*", (req, res) => res.redirect("/"))

const server = app.listen(process.env.PORT || 8090, () => {
	const host = server.address().address
	const port = server.address().port
	console.log(`serving at ${host} & port : ${port}`)
})
