const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const optimizedImages = require('next-optimized-images')
const withImages = require('next-images')

module.exports = withPlugins(
  [
    withCSS,
    withImages,
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
