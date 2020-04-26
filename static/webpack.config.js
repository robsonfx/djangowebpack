const path = require('path');
const webpack = require('webpack');
//var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    watch: true,
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // the 'transform-runtime' plugin tells Babel to
            // require the runtime instead of inlining it.
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-react']
                //   plugins: ['@babel/plugin-transform-runtime']
                }
              }
            }
          ]

    }

}