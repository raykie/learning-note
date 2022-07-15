module.exports = function (content) {
  // remove all the "console.log" expression
  const target = /console\.log\(.*\);?/g
  return content.replace(target, "")
}
