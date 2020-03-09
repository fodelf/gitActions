/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2020-02-28 15:23:01
 * @LastEditors: 吴文周
 * @LastEditTime: 2020-03-09 20:24:44
 */
module.exports = {
  lintOnSave: false,
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gitActions/'
    : '/'
}
