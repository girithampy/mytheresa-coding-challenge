const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};