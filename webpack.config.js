const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = path.resolve(__dirname, 'dist/');
const src = path.resolve(__dirname, 'src');

module.exports = {
  // entry: './src/index.js',
  entry: path.resolve(src, 'index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ["@babel/env"] }
      },
      {
        test: [/\.s[ac]ss$/i, /\.min.css$/],
        use: [
          "style-loader", 
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: "gltf-webpack-loader"
          }
        ]
      },
      {
        test: [/\.(bin)$/, /\.(jpg)$/, /\.(png)$/, /\.(glb|gltf)$/, /\.(svg)$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      },
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: dist,
    // publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    // contentBase: path.join(__dirname, 'public/'),
    static: {
      directory: path.join(__dirname, 'public/'),
    },
    port: 3000,
    // publicPath: 'http://localhost:3000/dist/',
    devMiddleware: {
      publicPath: 'http://localhost:3000/dist/',
    },
    // hotOnly: true
    hot: "only",
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: path.resolve(src, 'index.html')
      template: path.resolve('public', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
