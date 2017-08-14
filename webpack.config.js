'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry : [
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output : {
		path : path.join(__dirname, 'dist'),
		filename : 'bundle.js',
		publicPath : '/static/'
	},
	devtool : 'cheap-module-eval-source-map',
	module : {
		rules : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				use : {
					loader : 'babel-loader',
					options : {
						presets : ["es2015", "stage-0", "react"],
						plugins : ['transform-runtime', 'transform-decorators-legacy']
					}
				}
			}
		]
	},
	plugins : [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
};