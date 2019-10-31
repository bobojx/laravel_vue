module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'no-undef': 'off',
    'camelcase': 'off',
    'space-before-function-paren': [0, 'always'],// 函数定义时括号前面不要有空格
    'no-mixed-spaces-and-tabs': [0],// 关闭禁止混用tab和空格
    'no-tabs': 0,
    'spaced-comment': 0,
    'indent': [2, 2]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
