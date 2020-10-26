const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

const rules = [
  {
    test: [/\.ts$/, /\.tsx?$/, /\.js$/],
    use: 'ts-loader',
    exclude: /node_modules/,
  },
  {
    test: [/\.less$/, /\.css$/],
    use: [{
      loader: 'style-loader',
    },
      {
      loader: 'css-loader',
    }, {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    }],
  },
  { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
];

const getEnv = () => {
  const fileEnv = dotenv.config({ path: '.env' }).parsed;

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {

    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});
  return new webpack.DefinePlugin(envKeys);
};

module.exports = {
  entry: {
    index: path.join(__dirname, '/src/index.tsx'),
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules,
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      '@api': path.resolve(__dirname, './api'),
      '@config': path.resolve(__dirname, './config'),
      '@components': path.resolve(__dirname, './src/components'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
      favicon: path.join(__dirname, '/public/favicon.ico'),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }]
    }),
    getEnv(),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
