/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-24 21:21:12
 * @LastEditors: your name
 * @Description: 
 */
export default function debounce(fn, delay = 2000) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    const args = arguments;
    timer = setTimeout(() => {
      fn.apply(null, args)
    }, delay)
  }
}