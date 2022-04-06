/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-06 23:03:45
 * @LastEditors: your name
 * @Description: 
 */

export default function myInstanceOf(obj, className) {
  // 指针
  let pointer = obj
  while (pointer) {
    if (pointer === className.prototype) {
      return true
    }
    pointer = pointer.__proto__
  }
  return false
}