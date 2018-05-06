import Config, { environment } from 'webpack-config';

environment.setAll({
	env: () => process.env.NODE_ENV
});

export default new Config().extend('config/webpack/webpack.[env].config.js');
