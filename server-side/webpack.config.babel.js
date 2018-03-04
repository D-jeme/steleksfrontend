module.exports = {
  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    modules: [
      'node_modules',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
}
