const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/index.jsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

  mode: 'development',

  devServer: {
    static: './public',
    port: 3004,
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },

  stats: {
    warningsFilter: [
      /Critical dependency: require function is used in a way in which dependencies cannot be statically extracted/,
    ],
  },

  ignoreWarnings: [
    {
      module: /productImages\.ts/,
      message: /Critical dependency/,
    },
  ],

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};