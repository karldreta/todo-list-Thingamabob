const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/script.js',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/template.html',
        filename: 'index.html',
        inject: 'head',
        scriptLoading: 'defer',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/imgs/favicon_io_title/favicon-16x16.png',
      prefix: 'favicons/',
      emitStats: false,
      statsFilename: 'iconstats.json',
      inject: true,
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};