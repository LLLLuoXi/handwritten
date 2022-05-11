/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-11 22:06:36
 * @LastEditors: your name
 * @Description: 实现bind函数
 */
export default function myBind() {
  //将参数拆解成数组
  const args = Array.prototype.slice.call(arguments)
  //获取this(数组第一项)
  const t = args.shift()
  const self = this;
  return function () {
    return self.apply(t, args)
  }
}