/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-14 23:37:57
 * @LastEditors: your name
 * @Description: 入口文件
 */
import { curry5, curry6 } from './js/curry.js';
import clone from './js/clone.js';
import Myset from './js/mySet.js';





// ==============================测试区域===================================
// curry.js 测试
function f(x, y, z) {
    return (x + y) * z
}
var g = curry5(f, 2)
var g6 = curry6(f, 2)
console.log(g(3, 5));
console.log(g6(3, 5));



// ==============================测试区域===================================
// clone.js 测试

// const obj = {
//     x: 1,
//     y: 2,
//     subObj: {
//         a: 1,
//         b: 2
//     }
// }

// const arr = [123, [12, 5, 4], {
//     x: [12, 23]
// }]

// // const newObj = clone(obj)
// // console.log(newObj.subObj === obj.subObj); // true

// // const newObj = clone(obj, true)
// // console.log(newObj.subObj === obj.subObj);  // false

// const newArr = clone(arr, true)  // true
// console.log(newArr[0] === arr[0]);  // false
// console.log(newArr[1] === arr[1]);  // false
// console.log(newArr[2] === arr[2]);  // false

