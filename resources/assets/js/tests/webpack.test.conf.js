const webpack = require('webpack');

const webpackConfig = {
    devtool: '#inline-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': '"testing"'
        })
    ]
};

module.exports = webpackConfig;