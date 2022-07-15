const path = require("path")
const ESLintPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
const WorkboxPlugin = require("workbox-webpack-plugin")
const os = require("os")

const threads = os.cpus().length // CPU 核心数量

// get loaders concering style
function getStyleLoader(...loaders) {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["postcss-preset-env"],
        },
      },
    },
    ...loaders,
  ].filter(Boolean)
}

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    assetModuleFilename: "static/media/[hash:10][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      //config of loader
      {
        oneOf: [
          {
            test: /\.css$/i,
            use: getStyleLoader(),
          },
          {
            test: /\.less/i,
            use: getStyleLoader("less-loader"),
          },
          {
            test: /\.s[ac]ss/i,
            use: getStyleLoader("sass-loader"),
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 15 * 1024,
              },
            },
          },
          {
            test: /\.(ttf|woff2?)/i,
            type: "asset/resource",
          },
          {
            //资源通用模板
            test: /\.(mp[34]|avi)/i,
            type: "asset/resource",
          },
          {
            test: /\.m?js$/,
            // include: path.resolve(__dirname, "../src")
            exclude: /(node_modules|bower_components)/,
            use: [
              {
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
      threads,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].bundle.css",
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    "preset-default",
                    "prefixIds",
                    {
                      name: "sortAttrs",
                      params: {
                        xmlnsOrder: "alphabetical",
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
      /* 使用默认配置
        1. 将node_modules中的代码单独引用
        2. 动态导入语法引入的模块单独打包
      */
    },
    runtimeChunk: {
      name: (entryPoint) => `runtime-${entryPoint}.js`,
    },
  },
  mode: "production",
  devtool: "source-map",
}
