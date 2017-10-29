const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './03/prop-6/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/prop-6'),
        filename: 'prop_6_bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './03/prop-6/index.html'
        })
    ]
};
