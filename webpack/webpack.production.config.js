import Config from 'webpack-config';

export default new Config().extend('webpack/webpack.base.config.js').merge({
	output: {
		filename: 'bundle.min.js'
	}
});
