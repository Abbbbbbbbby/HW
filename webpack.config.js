const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head', // 將 script 插入 head
      scriptLoading: 'blocking' // 讓 script 同步載入
    })
  ],
  devServer: {
    contentBase: './dist',
    open: true, // 自動打開瀏覽器
  },
};