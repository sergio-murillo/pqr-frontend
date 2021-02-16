//  webpack.config.js
module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimization: {
    minimize: false
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  }
};
