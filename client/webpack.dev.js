const merge = require('webpack-merge');
const common = require('./webpack.common.js');
require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    watchOptions: {
      poll: true,
    },
    hot: true,
    open: false,
    host: 'localhost',
    port: 3000,
  },
});
