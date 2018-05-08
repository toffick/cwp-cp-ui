import Config from 'webpack-config';

export default new Config().extend('config/webpack/webpack.base.config.js').merge({
	output: {
		filename: 'bundle.min.js'
	},
	devtool: 'nosources-source-map',
});