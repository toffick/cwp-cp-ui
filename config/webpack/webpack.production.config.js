import Config from 'webpack-config';
import webpack from "webpack";

export default new Config().extend('config/webpack/webpack.base.config.js').merge({
	output: {
		filename: 'bundle.min.js'
	},
	devtool: 'nosources-source-map',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			minimize: true,
			sourceMap: false
		}),

	],
});
