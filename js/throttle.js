/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-24 21:13:12
 * @LastEditors: luoxi
 * @Description: 节流
 */

/**
 * 描述
 * @date 2022-03-24
 * @param {any} fn 要节流的函数
 * @param {any} time 间隔时间
 * @returns {any}
 */
export default function throttle(fn, time) {
  let timer;
  return function () {
    if (timer) {
      return;
    }
    const args = arguments;
    timer = setTimeout(function () {
      fn.apply(null, args);
      timer = null;
    }, time);
  };
}