const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD settings gonna be here
  mode: 'production',
  output: {
    publicPath: '/webpack_pr1/dist/'
  },
  plugins: []
});

// export buildWebpackConfig
module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})