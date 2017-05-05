const path = require('path');
const webpack = require('webpack');

module.exports = {
        entry: {
            apps: [ "./src/camper-leaderboard/app.js", "./src/md-previewer/app.js"],
            fx: ['react', 'react-dom']
        },
        module: {
            rules: [
                {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/}
            ]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "[name].bundle.js"
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'fx'
            })
        ]
    };