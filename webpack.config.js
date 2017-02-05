const path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'index.ts'),
  output: {
    filename: 'ng2validators.js',
    path: path.resolve(__dirname, 'bundles')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    )
  ]
};
