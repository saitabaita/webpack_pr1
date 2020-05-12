const webpack =require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV settings gonna be here
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    // historyApiFallback: true,
    // noInfo: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8081,
  },
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ]
});
// export devWebpackConfig
module.exports = new Promise((resolve, reject) => {
 resolve(devWebpackConfig)
})