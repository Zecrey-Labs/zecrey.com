const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const optimizedImages = require('next-optimized-images')
const withImages = require('next-images')

module.exports = withPlugins([
  withCSS,
  withImages({
    webpack(config, options) {
      return config
    }
  }),
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 80
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true
      },
      imagesPublicPath: '/zecrey/_next/static/images/'
    }
  ],
  {
    basePath: '/zecrey',
    assetPrefix: '/zecrey/'
  }
])
