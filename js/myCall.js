/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-11 22:10:20
 * @LastEditors: your name
 * @Description: 实现call函数
 */
export default function myCall() {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments);
  // 获取this（数组第一项）
  const t = args.shift();
  const self = this;
  t.fn = self;
  const res = t.fn(...args);
  delete t.fn;
  return res;
}

//  函数剩余参数实现
// export default function myCall(obj, ...args) {
//   const t = obj;
//   const self = this;
//   t.fn = self;
//   const res = t.fn(...args);
//   delete t.fn;
//   return res;
// }

// 改变this思路

// const t = {
//   fn() {
//     console.log('this',this);
//   },
// };
