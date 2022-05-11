/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-11 22:13:52
 * @LastEditors: your name
 * @Description: 实现apply函数
 */
export default function myApply() {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments);
  // 获取this（数组第一项）
  const t = args.shift();
  const self = this;
  t.fn = self;
  const res = t.fn(...args[0]);
  delete t.fn;
  return res;
}
