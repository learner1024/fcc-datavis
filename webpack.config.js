const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const PATHS = {
    root: path.resolve(__dirname),
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

const commonConfig = {
    context: PATHS.src,
    entry: {
        apps: [ "./camper-leaderboard/app.js", "./md-previewer/app.js"],
        fx: ['react', 'react-dom']
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/,  include: PATHS.src},
            {test: /\.(pug|jade)$/, use: 'pug-loader', exclude: /node_modules/,  include: PATHS.src}
        ]
    },
    output: {
        path: PATHS.dist,
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
            template: 'landing/views/index.pug',
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
            template: 'landing/views/index.pug',
            filename: path.join(PATHS.root, 'index.html')
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