const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './03/prop-3/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/prop-3'),
        filename: 'prop_3_bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './03/prop-3/index.html'
        })
    ]
};
