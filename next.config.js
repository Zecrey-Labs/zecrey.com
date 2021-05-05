/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins(
  [
    withCSS,
    [
      optimizedImages,
      {
        inlineImageLimit: 8192,
      },
    ],
  ],
  {
    env: {
      PLATFORM: process.env.PLATFORM,
    },
    devIndicators: {
      autoPrerender: false,
    },
    redirects() {
      return [
        process.env.PLATFORM === 'intelligent' && {
          source: '/',
          destination: '/intelligent',
          permanent: true,
        },
      ].filter(Boolean)
    },
  }
)
