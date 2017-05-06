const path = require('path');
const webpack = require('webpack');

module.exports = {
        context: path.resolve(__dirname, 'src'),
        entry: {
            apps: [ "./camper-leaderboard/app.js", "./md-previewer/app.js"],
            fx: ['react', 'react-dom']
        },
        module: {
            rules: [
                {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/,  include: path.resolve(__dirname, 'src'),}
            ]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist',
            filename: "[name].bundle.js"
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'fx'
            })
        ],
        devServer: {
            historyApiFallback: true
        }
    };