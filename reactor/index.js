import React from "react"
import ReactDOMServer from "react-dom/server"
import path from "path"

import Head from "./head"
import Body from "./body"

import getClientBundleEntryAssets from "./asset-reader"

const { assetsByChunkName, path: bundlePath } = getClientBundleEntryAssets()

const HTML = props => (
	<html>
		<Head
			cssFiles={[
				"assets/css/bootstrap.css",
				"assets/css/font-awesome.min.css",
				`${bundlePath}/${assetsByChunkName.client[0]}`,
			]}
		/>
		<body className="body-class index_1 home1">
			<Body {...props} />
		</body>
		<script type="text/javascript" src={path.join(bundlePath, assetsByChunkName.vendor)} />
		<script type="text/javascript" src={path.join(bundlePath, assetsByChunkName.client[1])} />
	</html>
)

export const renderAppToString = pageName => ReactDOMServer.renderToString(<HTML pageName={pageName} />)
