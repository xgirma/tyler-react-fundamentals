const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './03/prop-5/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/prop-5'),
        filename: 'prop_5_bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './03/prop-5/index.html'
        })
    ]
};
