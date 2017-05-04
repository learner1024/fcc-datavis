const path = require('path');
module.exports = {
    entry: './src/md-previewer/app.js',
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'md-previewer-bundle.js'
    }
};