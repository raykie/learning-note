class BannerWebpackPlugin {
  constructor(options = { author: "someone" }) {
    this.options = options
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "BannerWebpackPlugin",
      (compilation, callback) => {
        // 1. 获取即将输出的资源文件
        // 2. 只保留js和css
        // 3. 遍历剩下资源添加上注释
        const prefix = `/*
      author: ${this.options.author}
      */`
        const ext = ["css", "js"]
        const assets = Object.keys(compilation.assets).filter((filePath) => {
          const splited = filePath.split(".")
          const currentExt = splited[splited.length - 1]
          return ext.includes(currentExt)
        })
        console.log(assets)
        assets.forEach((asset) => {
          const source = compilation.assets[asset].source()
          const newContent = prefix + source

          compilation.assets[asset] = {
            source() {
              return newContent
            },
            size() {
              return newContent.length
            },
          }
        })

        callback()
      }
    )
  }
}

module.exports = BannerWebpackPlugin
