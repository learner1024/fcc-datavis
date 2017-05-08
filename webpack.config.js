const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        apps: [ "./camper-leaderboard/app.js", "./md-previewer/app.js"],
        fx: ['react', 'react-dom']
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/,  include: path.resolve(__dirname, 'src')}
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
    }
    
};

const devConfig = {
    devServer: {
        publicPath: "/",
        historyApiFallback: true,
        overlay: true
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'fx'
        }),
        new HtmlWebpackPlugin({
            template: '!!pug-loader!src/landing/views/index.pug',
            filename: 'index.html'
        })
    ]
};

const prodConfig = {
    output: {
        publicPath: 'https://learner1024.github.io/fcc-datavis/dist'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'fx'
        }),
        new HtmlWebpackPlugin({
            template: '!!pug-loader!src/landing/views/index.pug',
            filename: path.join(__dirname, 'index.html')
        })
    ]
}

module.exports = (env) => {    
    if(env == "production"){
        return webpackMerge(commonConfig, prodConfig);
    }
    else if (env = "development"){
        return webpackMerge(commonConfig, devConfig);
    }
} 