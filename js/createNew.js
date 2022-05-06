/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-06 23:04:30
 * @LastEditors: your name
 * @Description: 实现new操作符
 */
export default function createNew(fn, ...args) {
  let obj = Object.create({});
  // 将空对象的原型（隐式原型），指向与构造函数的原型
  Object.setPrototypeOf(obj, fn.prototype);
  // 将空对象作为构造函数的上下文(改变this指向)
  let result = fn.apply(obj, args);
  return result instanceof Object ? result : obj
}