const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

let plugins = [new ExtractTextPlugin('css/style.css')];

if (isProd) {
	plugins.push(new UglifyJsPlugin());
}

module.exports = {
	entry: "./src/scripts/index.js",

	devtool: 'source-map',

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/index.js"
	},

	watch: true,

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
					use: [
						{
							loader: 'css-loader',
							options: {sourceMap: true}
						},
                        {
                            loader: 'postcss-loader',
                            options: {sourceMap: true}
                        },
                        {
                            loader: 'sass-loader',
                            options: {sourceMap: true}
                        }
					]
				})
			},
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        	name: '[name].[ext]',
                            publicPath: '../img/style/',
							outputPath: 'img/style/'
						}
                    }
                ]
            }
		]
	},

	plugins: plugins
}

