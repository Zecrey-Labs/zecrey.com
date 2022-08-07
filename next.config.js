module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|png|jpg|gif|mp4)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}
