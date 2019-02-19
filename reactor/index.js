import React from "react"
import ReactDOMServer from "react-dom/server"
import path from "path"

import Head from "./head"

import { Route, StaticRouter } from "react-router-dom"

import Home from "./pages/home"
import Subscribe from "./pages/subscribe"
import Footer from "./footer"
import getClientBundleEntryAssets from "./asset-reader"

const HTML = ({ url }) => {
	const { path: sitePath, assetsByChunkName } = getClientBundleEntryAssets()

	return (
		<html lang="en">
			<Head />
			<body className="body-class index_1 home1">
				<StaticRouter location={url} context={{}}>
					<div id="body-wrap">
						<Route path="/" component={Home} exact />
						<Route path="/subscribe" component={Subscribe} exact />
						<Footer />
					</div>
				</StaticRouter>
			</body>

			<script type="text/javascript" src={path.join(sitePath, assetsByChunkName.vendor)} />
			<script type="text/javascript" src={path.join(sitePath, assetsByChunkName.client)} />

			<link rel="stylesheet" type="text/css" href={path.join(sitePath, assetsByChunkName.style[0])} />
		</html>
	)
}

export const renderAppToString = url => ReactDOMServer.renderToString(<HTML url={url} />)
