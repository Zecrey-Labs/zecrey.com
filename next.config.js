const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins(
  [
    withCSS,
    [
      optimizedImages,
      {
        inlineImageLimit: 8192
      }
    ]
  ],
  {
    basePath: '/zecrey',
    assetPrefix: '/zecrey/'
  }
)
