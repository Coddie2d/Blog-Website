const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('graceful-fs').gracefulify(require('fs'));

const pages = ["index", "index__Photografie","index__Challenge","index__Blog","index__Over_mij","index__Contact"];

module.exports = {
    
    mode:'development',
    stats: { 
        children: true 
        },
  entry: pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`;
    return config;
  }, {}),
  output: {
     assetModuleFilename:'assets/[hash][ext][query]',
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  plugins: [].concat(
    new MiniCssExtractPlugin({
        filename:'[name].[contenthash].css'
    }),
    
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),
  module:{
    rules:[
      {
          test:/\.html$/,
          loader:'html-loader',
      },
      {
          test:/\.(sa|sc|c)ss$/,
          use:[
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
              loader:"postcss-loader",
                  options:{
                      postcssOptions:{
                          plugins:[
                              [
                                  'postcss-preset-env',
                                  {

                                  }
                              ]
                          ],
                      },
                  },
              },
              "sass-loader",
          ]
      },

      {
          test:/\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'

      },
      
  ]},
  
};