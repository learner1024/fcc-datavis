const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const PATHS = {
    root: path.resolve(__dirname),
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    prod: 'https://learner1024.github.io/fcc-datavis/'
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
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'fx'
        }),
        new HtmlWebpackPlugin({
            template: 'landing/views/index.pug',
            filename: path.join(PATHS.root, 'index.html'),
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin()
    ]
    
};

const devConfig = {
    devServer: {
        publicPath: "/dist",
        historyApiFallback: true,
        overlay: true
    }
    
};

const prodConfig = {
    output: {
        publicPath: PATHS.prod + 'dist'
    }    
}

module.exports = (env) => {    
    if(env == "production"){
        return webpackMerge(commonConfig, prodConfig);
    }
    else if (env = "development"){
        return webpackMerge(commonConfig, devConfig);
    }
} 