const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/index.js',
    //print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(xml)$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: 'dist'
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: "production", // 用来使用UglifyJSPlugin
};