const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
});

const PATHS = {
    root: path.resolve(__dirname),
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    prod: 'https://learner1024.github.io/fcc-datavis/',
};

const commonPlugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'fx',
    }),
    new HtmlWebpackPlugin({
        template: 'landing/views/index.pug',
        filename: path.join(PATHS.root, 'index.html'),
        alwaysWriteToDisk: true,
    }),
    extractSass,
    new webpack.ProvidePlugin({
        $: 'jquery/dist/jquery.slim.min.js',
        jQuery: 'jquery/dist/jquery.slim.min.js',
        Tether: 'tether/dist/js/tether.min.js'
    }),
    new webpack.NamedModulesPlugin(),
];


const commonConfig = {
    context: PATHS.src,
    entry: {
        apps: ['./landing/app.js', './camper-leaderboard/app.js', './md-previewer/app.js'],
        fx: [
            'react', 
            'react-dom', 
            'remarkable', 
            'whatwg-fetch', 
            'promise-polyfill', 
            'bootstrap/dist/js/bootstrap.min.js', 
            'tether/dist/js/tether.min.js', 
            'jquery/dist/jquery.slim.min.js',
        ],
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/,  include: PATHS.src},
            {test: /\.(pug|jade)$/, use: 'pug-loader', exclude: /node_modules/,  include: PATHS.src},
            {test: /\.scss$/,use: extractSass.extract({use: ['css-loader','sass-loader'], fallback: 'style-loader'})},
            {test: /\.css$/,use: extractSass.extract({ use: ['css-loader'] })},
        ],
    },
    output: {
        path: PATHS.dist,
        filename: '[name].bundle.js',
    },
    
};

const devConfig = () => {
    var devPlugins = [new HtmlWebpackHarddiskPlugin()];
    return {
        devServer: {
            publicPath: '/dist',
            historyApiFallback: true,
            overlay: true,
        },
        plugins : commonPlugins.concat(devPlugins),
        
    };
};

const prodConfig = () => {
    return {
        output: {
            publicPath: PATHS.prod + 'dist',
        },
        plugins: commonPlugins,   
    };
};

module.exports = (env) => {    
    if(env == 'production'){
        return webpackMerge(commonConfig, prodConfig());
    }
    else if (env == 'development'){
        return webpackMerge(commonConfig, devConfig());
    }
}; 