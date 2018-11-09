import React from "react"
import ReactDOMServer from "react-dom/server"
import path from "path"

import Head from "./head"
import Body from "./body"

import getClientBundleEntryAssets from "./asset-reader"

const HTML = props => (
	<html>
		<Head />
		<body className="body-class index_1 home1">
			<Body {...props} />
		</body>
		<script
			type="text/javascript"
			src={path.join(getClientBundleEntryAssets().path, getClientBundleEntryAssets().assetsByChunkName.vendor)}
		/>
		<script
			type="text/javascript"
			src={path.join(getClientBundleEntryAssets().path, getClientBundleEntryAssets().assetsByChunkName.client)}
		/>
	</html>
)

export const renderAppToString = pageName => ReactDOMServer.renderToString(<HTML pageName={pageName} />)
