
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEBUG = !process.argv.includes('--release');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'client.js'),
    output: {
        path: path.resolve(__dirname, 'build', 'public'),
        publicPath: '/',
        filename: 'bundle.js',
        chunkFilename: DEBUG ? '[id].chunk.js' : '[chunkhash].js',
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: [/\.scss$/, /\.css$/],
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader!sass-loader'),
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader',
                query: {
                    emitFile: true,
                    limit: 10000,
                    name: DEBUG ? '[name].[ext]' : '[hash].[ext]',
                }
            },
            {
                test: /\.js$/,
                loader: `eslint-loader${DEBUG ? '?{rules:{"no-console":0}}' : ''}`,
                exclude: /node_modules/,
            },
        ]
    },
    devtool: DEBUG ? 'eval-source-map' : false,
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: process.cwd(),
        }),
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'main',
            minChunks: 2,
        }),
        ...(!DEBUG ? [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                },
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    screw_ie8: true,
                    warnings: false,
                },
                comments: false,
            }),
        ] : []),
    ],
};
