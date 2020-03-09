/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2020-02-28 15:23:01
 * @LastEditors: 吴文周
 * @LastEditTime: 2020-03-09 23:09:36
 */
const ispro = process.env.NODE_ENV !== 'development'
module.exports = {
  lintOnSave: false,
  // outputDir: 'dist',
  publicPath: ispro ? '' : '/',
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/gitActions/'
  //   : '/'
}
