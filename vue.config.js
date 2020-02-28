/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2020-02-28 15:23:01
 * @LastEditors: 吴文周
 * @LastEditTime: 2020-02-28 15:23:40
 */
module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gitActions/'
    : '/'
}
