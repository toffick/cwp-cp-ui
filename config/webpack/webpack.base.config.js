import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Config from 'webpack-config';
import webpack from 'webpack';

const options = require(`../config.${process.env.NODE_ENV}.json`);

export default new Config().merge({
	entry: {
		app: path.resolve('src/index.jsx'),
	},
	output: {
		path: path.resolve(__dirname, '../', 'dist'),
		chunkFilename: '[name].bundle.js',
		publicPath: '.'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader' },
						{ loader: 'sass-loader' }
					]
				})
			},
			{
				test: /\.(png|jpg|ico|svg)$/,
				loader: 'file-loader?name=images/[name].[ext]'
			},
			{
				test: /\.(gif|ttf|eot|svg|woff2?)$/,
				use: 'url-loader?name=[name].[ext]',
			}
		],
	},
	resolve: {
		modules: [
			'node_modules',
		],
		extensions: ['.js', '.jsx', '.json'],
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			template: "./src/assets/index.html",
			inject: 'body'
		}),
		new webpack.DefinePlugin({
			SERVER_HOST: JSON.stringify(options.host)
		}),
	],
});
