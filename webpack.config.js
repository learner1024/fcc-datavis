const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyleTag = new ExtractTextPlugin({
    filename: '[name].css',
});

const PATHS = {
    root: path.resolve(__dirname),
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    prod: 'https://sandeepkhandewale.js.org/fcc-datavis/',
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
    extractStyleTag,
    new webpack.ProvidePlugin({
        $: 'jquery/dist/jquery.slim.min.js',
        jQuery: 'jquery/dist/jquery.slim.min.js',
        Tether: 'tether/dist/js/tether.min.js',
    }),
    new webpack.NamedModulesPlugin(),
];


const commonConfig = {
    context: PATHS.src,
    entry: {
        apps: [
            './landing/app.js', 
            './camper-leaderboard/app.js', 
            './md-previewer/app.js', 
            './recipe-box/app.js', 
            './game-of-life/app.js', 
            './datavis-bargraph/app.js',
            './datavis-scatterplot/app.js',
            './datavis-heatmap/app.js',
            './datavis-forcedirectedgraph/app.js',
            './datavis-globe/app.js',
        ],
        fx: [
            'react', 
            'react-dom', 
            'remarkable', 
            'whatwg-fetch', 
            'promise-polyfill', 
            'bootstrap/dist/js/bootstrap.min.js', 
            'tether/dist/js/tether.min.js', 
            'jquery/dist/jquery.slim.min.js',
            'd3',
        ],
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/,  include: PATHS.src},
            {test: /\.(pug|jade)$/, use: 'pug-loader', exclude: /node_modules/,  include: PATHS.src},
            {test: /\.scss$/,use: extractStyleTag.extract({use: ['css-loader','sass-loader'], fallback: 'style-loader'})},
            {test: /\.css$/,use: extractStyleTag.extract({ use: ['css-loader'] })},
            {test: /\.(woff(2)?|ttf|png|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader?limit=10000']},
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
            publicPath: PATHS.prod + 'dist/',
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