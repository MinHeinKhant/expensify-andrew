const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  const isProduction = env === 'production';
  const devMode = process.env.NODE_ENV !== 'production';

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, '/public/', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
          // use: [
          //   devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          //   'css-loader',
          //   'sass-loader'
          // ]
        }
      ]
    },
    plugins: [new ExtractTextPlugin('style.css')],
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: 'style.css'
    //   })
    // ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, '/public/', 'dist'),
      historyApiFallback: true,
      publicPath: '/dist/'
    },
    mode: 'development'
  };
};
