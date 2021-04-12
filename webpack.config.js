var nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.ts',
        profile: './src/profile.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '/dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({}),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};