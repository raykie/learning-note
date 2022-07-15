const path = require("path")
const ESLintPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const os = require("os")

const threads = os.cpus().length

module.exports = {
  entry: "./src/main.js",
  output: {
    path: undefined,
    filename: "static/js/main.js",
  },
  module: {
    rules: [
      //config of loader
      {
        oneOf: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.less/i,
            use: ["style-loader", "css-loader", "less-loader"],
          },
          {
            test: /\.s[ac]ss/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 15 * 1024,
              },
            },
            generator: {
              filename: "static/img/[hash:10][ext][query]",
            },
          },
          {
            test: /\.(ttf|woff2?)/i,
            type: "asset/resource",
            generator: {
              filename: "static/font/[hash:10][ext][query]",
            },
          },
          {
            //资源通用模板
            test: /\.(mp[34]|avi)/i,
            type: "asset/resource",
            generator: {
              filename: "static/media/[hash:10][ext][query]",
            },
          },
          {
            test: /\.m?js$/,
            // include: path.resolve(__dirname, "../src")
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // config of plugin
    new ESLintPlugin({
      context: path.resolve(__dirname, "../src"),
      exclude: "node_modules", // default
      cache: true,
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/eslintcache"
      ),
      threads
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  mode: "development",
  // devServer: {
  //   host: "localhost", //域名
  //   port: "3300", //端口号
  // },
  devtool: "cheap-module-source-map",
}
