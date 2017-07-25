const webpack = require('webpack');
const merge = require('webpack-merge');
const mixWebpackConfig = require('laravel-mix/setup/webpack.config');

const webpackConfig = merge.smart(mixWebpackConfig, {
    devtool: '#inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': '"testing"'
        })
    ]
});

// Clean webpackConfig
delete webpackConfig.entry;
// Remove commonsChunkPlugin
const commonsChunkPluginIndex = webpackConfig.plugins.findIndex(plugin => plugin.chunkNames);
webpackConfig.plugins.splice(commonsChunkPluginIndex, 1);

module.exports = webpackConfig;