const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const BannerWebpackPlugin = require("./plugins/banner-webpack-plugin")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          "./loaders/pitch-loader-1.js",
          "./loaders/pitch-loader-2.js",
          "./loaders/pitch-loader-3.js",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new BannerWebpackPlugin({
      author: "ruiqi"
    })
  ],
  mode: "development",
}
