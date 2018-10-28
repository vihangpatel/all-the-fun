import React from "react"
import ReactDOMServer from "react-dom/server"

import Head from "./head"
import Body from "./body"

const HTML = props => (
	<html>
		<Head />
		<Body {...props} />
	</html>
)

export const renderToString = (req, res) => {
	const pageName = req.params.pageName
	const stringOutPut = ReactDOMServer.renderToString(<HTML pageName={pageName} />)
	res.send(stringOutPut)
}
