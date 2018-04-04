const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	mode: "development",
	entry: "./src/scripts/index.js",

	devtool: 'inline-source-map',

	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		port: 3000
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/index.js"
	},

	watchOptions: {
		aggregateTimeout: 300
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							// outputPath: 'assets',
							useRelativePath: true
						}
					}
				]
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('css/style.css')
	]
}

