
const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const DEBUG = !process.argv.includes('--release');

const loaders = [
    {
        exclude: /node_modules/,
        loader: 'babel',
    },
    {
        test: [/\.scss$/, /\.css$/],
        loaders: [
            'isomorphic-style-loader',
            `css-loader?${DEBUG ? 'sourceMap&' : 'minimize&'}modules&localIdentName=` +
            `${DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]'}`,
            'sass-loader'
        ],
    },
    {
        test: /\.js$/,
        loader: `eslint-loader${DEBUG ? '?{rules:{"no-console":0}}' : ''}`,
        exclude: /node_modules/,
    },
];

const resolveLoader = {
    alias: {
        'original-css': [
            `css-loader?${DEBUG ? 'sourceMap&' : 'minimize&'}` +
            `localIdentName=${DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]'}`,
        ],
    },
};

const urlLoader = {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
    loader: 'url-loader',
    query: {
        emitFile: true,
        limit: 10000,
        name: DEBUG ? '[name].[ext]' : '[hash].[ext]',
    }
};

const client = {
    entry: path.resolve(__dirname, 'src', 'client.js'),
    output: {
        path: path.resolve(__dirname, 'build', 'public'),
        publicPath: '/',
        filename: DEBUG ? 'bundle.js' : '[hash].js',
        chunkFilename: DEBUG ? '[id].chunk.js' : '[chunkhash].js',
    },
    target: 'web',
    node: {
        fs: 'empty',
    },
    module: {
        loaders: [
            ...loaders,
            urlLoader
        ]
    },
    resolveLoader,
    devtool: DEBUG ? 'eval-source-map' : false,
    plugins: [
        new AssetsPlugin({ path: path.join(__dirname, 'build')}),
        new CleanWebpackPlugin(['build/public'], {
            root: process.cwd(),
        }),
        new ExtractTextPlugin(DEBUG ? 'style.css' : '[contenthash].css', { allChunks: true }),
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

const server = {
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.js',
        publicPath: '/',
    },
    target: 'node',
    module: {
        loaders: [
            ...loaders,
            Object.assign({}, urlLoader, {
                query: Object.assign({}, urlLoader.query, {
                    emitFile: false,
                })
            })
        ],
    },
    resolveLoader,
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        })
    ],
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
    },
    externals: [nodeExternals({
        whitelist: [/\.css/],
    })],
};

module.exports = [
    client,
    server,
];
