module.exports = function (content) {
  return content
}

module.exports = function (content, map, meta) {
  /*
    第一个参数err 表示是否有错误，
    第二个参数表示文本内容，
    第三个参数表示 sourcemap
    第四个参数表示 向后传递的数据
  */
  console.log("sync-loader")
  this.callback(null, content, map, meta)
  return // 调用callback时，总是返回undefined
}
