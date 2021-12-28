const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProdBuild = env.production;
  const styleLoader = isProdBuild ? MiniCssExtractPlugin.loader : 'style-loader';

  return {
    entry: path.join(__dirname, '/src/index.js'),
    mode: isProdBuild ? 'production' : 'development',
    devtool: isProdBuild ? 'source-map' : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(scss|css)$/,
          use: [
            styleLoader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: '@import "src/styles/variables.scss";',
              },
            }],
        },
        {
          test: /\.jpg/,
          type: 'asset/resource',
        },
        {
          test: /\.svg/,
          type: 'asset/inline',
        },
      ],
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
      clean: true,
    },
    devServer: {
      static: path.join(__dirname, '/dist'),
      port: process.env.PORT || 3000,
      hot: true,
    },
    plugins: [new HtmlWebpackPlugin({ template: './public/index.html' }), new MiniCssExtractPlugin()],
  };
};
