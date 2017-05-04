const path = require('path');

let microApps = [
    "camper-leaderboard", "md-previewer"
];

let configs = microApps.map(microApp => {
    return {
        entry: `./src/${microApp}/app.js`,
        module: {
            rules: [
                {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/}
            ]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `${microApp}-bndl.js`
        }
    }
});

module.exports = configs;