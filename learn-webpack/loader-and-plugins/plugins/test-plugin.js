/*
    1. webpack加载该配置，实例化TestPlugin
    2. webpack创建compiler对象
    3. 遍历所有plugins中插件，调用其中的apply
    4. 执行剩下的编译流程（触发各个hooks事件）
*/
class TestPlugin {
  constructor() {
    console.log("TestPlugin constructor")
  }

  apply(compiler) {
    debugger
    console.log("TestPlugin apply")

    compiler.hooks.environment.tap("TestPlugin", (params) => {
      console.log("TestPlugin environment")
    })

    compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("TestPlugin emit 2", compiler)
        callback()
      }, 2000)
    })
  }
}

module.exports = TestPlugin
