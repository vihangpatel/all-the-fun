const path = require("path")
const webpack = require("webpack")
const { StatsWriterPlugin } = require("webpack-stats-plugin")

const buildPath = path.join(__dirname, "public", "build")

module.exports = {
	entry: { client: "./reactor/client.js" },
	target: "web",
	output: {
		path: buildPath,
		filename: "[name].[contentHash].js",
		chunkFilename: "[name].[contentHash].js",
		publicPath: "/",
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					enforce: true,
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ["/node_modules/"],
				loaders: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			__CLIENT__: true,
		}),
		new StatsWriterPlugin({
			filename: "stats.json",
		}),
	],
}
