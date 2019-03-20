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

const cacheSSR = {}
const cacheBuilding = {}

const generateCriticalPage = pageURL => {
	const stringOutput = `<!DOCTYPE html>${renderAppToString(pageURL)}`
	return stringOutput
}

const requestHandler = (req, res) => {
	const pageURL = req.url

	// if cache URL is there then return the cached version
	if (cacheSSR[pageURL]) {
		console.log("Served cached response for ", pageURL)
		res.send(cacheSSR[pageURL])
	} else {
		if (cacheBuilding[pageURL]) {
			console.log("Served auto refresh page for ", pageURL)
			res.send(
				`<html><head><meta http-equiv="refresh" content="10"></head><body>Wait for 10 seconds</body></html>`
			)
			return
		}
		console.log("Building cache for ", pageURL)
		cacheBuilding[pageURL] = true
		cacheSSR[pageURL] = generateCriticalPage(pageURL)
		res.send(cacheSSR[pageURL])
	}
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
