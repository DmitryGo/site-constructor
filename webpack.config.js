const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[hash].js'
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			'app': path.resolve(__dirname, 'src')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'bundle.[hash].css'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				],
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ["@babel/preset-env"]
						}
					}
				]
			}
		]
	}
}
