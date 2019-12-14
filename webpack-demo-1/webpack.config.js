const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].[contenthash].js'
    },
    plugins:[new HtmlWebpackPlugin({
        title: 'My App',
        template: 'assets/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
