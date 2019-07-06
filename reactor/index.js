import React, { Fragment } from "react"
import ReactDOMServer from "react-dom/server"
import path from "path"

import Head from "./head"

import { Route, StaticRouter } from "react-router-dom"

import Home from "./pages/home"
import Subscribe from "./pages/subscribe"
import Tickets from "./pages/tickets"
import Workshop from "./pages/workshop"
import Footer from "./footer"
import getClientBundleEntryAssets from "./asset-reader"


const HTML = ({ url }) => {
	const { path: sitePath, assetsByChunkName } = getClientBundleEntryAssets()

	return (
		<html lang="en">
			<Head />
			{
				process.env.ENV === 'development' ?
					<link rel="stylesheet" type="text/css" href="http://localhost:9000/assets/css/styles.css" />
					: <link rel="stylesheet" type="text/css" href={path.join(sitePath, assetsByChunkName.style[0])} />
			}
			<body className="body-class index_1 home1">
				<StaticRouter location={url} context={{}}>
					<div id="body-wrap">
						<Route path="/" component={Home} exact />
						<Route path="/tickets" component={Tickets} exact />
						<Route path="/workshop" component={Workshop} exact />
						<Route path="/subscribe" component={Subscribe} exact />
						<Footer />
					</div>
				</StaticRouter>
			</body>
			{
				process.env.ENV === 'development' ?
					<script type="text/javascript" src="http://localhost:9000/client.dev.js" />
					:
					<Fragment>
						<script type="text/javascript" src={path.join(sitePath, assetsByChunkName.vendor)} />
						<script type="text/javascript" src={path.join(sitePath, assetsByChunkName.client)} />
					</Fragment>
			}
		</html>
	)
}

export const renderAppToString = url => ReactDOMServer.renderToString(<HTML url={url} />)
