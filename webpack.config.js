const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/, //process these file types
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      },
    ]
  }
};