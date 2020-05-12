const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const PATHS = { 
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets'
}
const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      loader:{
        loader: 'babel-loader',
        options: {
          presets:[
            '@babel/preset-env'
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties'
          ]
        }
      },
      exclude: '/node_modules/'
    },
    {
      test: /\.ts$/,
      loader:{
        loader: 'babel-loader',
        options: {
          presets:[
            '@babel/preset-env',
            '@babel/preset-typescript'
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties'
          ],
          sourceType: "script"
        }
      },
      exclude: '/node_modules/'
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader',
      options: {
      }
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      }
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      }
    },
    {
        test: /\.css$/,
        use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            }, {
              loader: 'postcss-loader',
              options: { sourceMap: true, config: { path: `./postcss.config.js` } }
            }
         ]
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            }, {
              loader: 'postcss-loader',
              options: { sourceMap: true, config: { path: `./postcss.config.js` } }
            }, {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
        ]
      }
    ]
  },
  output: {
    filename: `${PATHS.assets}/js/[name].js`,
    path: PATHS.dist,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]((?!jquery).*)[\\/]/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  resolve:{
    alias: {
      '~': 'src',
      'jquery-ui': 'jquery-ui-dist/jquery-ui.min.js'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/[name].css`,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}/img`, to: `${PATHS.assets}/img` },
      { from: `${PATHS.src}/${PATHS.assets}/css/images`, to: `${PATHS.assets}/css/images` },
      { from: `${PATHS.src}/${PATHS.assets}/fonts`, to: `${PATHS.assets}/fonts` },
      { from: 'node_modules/jquery-ui-dist/jquery-ui.min.css', to: `${PATHS.assets}/css/jquery-ui.min.css` },
      { from: 'node_modules/air-datepicker/dist/css/datepicker.min.css', to: `${PATHS.assets}/css/datepicker.min.css` },
      { from: 'node_modules/jquery/dist/jquery.min.js', to: `${PATHS.assets}/js/jquery.min.js` },
      { from: 'node_modules/jquery-bar-rating/dist/themes/css-stars.css', to: `${PATHS.assets}/css/css-stars.css` },
      { from: 'node_modules/jquery-bar-rating/jquery.barrating.js', to: `${PATHS.assets}/js/jquery.barrating.js` },
      { from: 'node_modules/lightslider/dist/css/lightslider.min.css', to: `${PATHS.assets}/css/lightslider.min.css` },
      { from: 'src/libs/flexible-paginator/paginator.js', to: `${PATHS.assets}/js/paginator.js` },
      { from: `${PATHS.src}/libs/flexible-paginator/paginator-style.css`, to: `${PATHS.assets}/css/paginator-style.css` },
      { from: `${PATHS.src}/static` },
    ]),
    new webpack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery",
      "window.jQuery":"jquery"
    }),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`,
      options: {
        isAnonymous: true, 
        name: 'test',
        title: 'Test'
      }
    }))
  ]
}