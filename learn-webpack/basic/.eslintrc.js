module.exports = {
  //继承
  extends: ["eslint:recommended"],
  //检查规则
  rules: {
    // semi: "off",
    "array-callback-return": "warn",
    eqeqeq: ["warn", "smart"],
    "no-var": "error",
  },
  env: {
    node: true, //启用node中全局变量
    browser: true, //启用浏览器中全局变量
  },
  //解析选项
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeature: {
      jsx: true,
    },
  },
  plugins: ["import"],
}
