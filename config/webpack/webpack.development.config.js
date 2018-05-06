import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('config/webpack/webpack.base.config.js').merge({
	output: {
		filename: 'bundle.js'
	},
	devtool: 'cheap-module-source-map',
	devServer: {
		hot: true,
		contentBase: './dist',
		host: 'localhost',
		publicPath: '/',
		open: true,
		historyApiFallback: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});
