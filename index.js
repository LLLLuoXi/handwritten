/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-06 23:03:10
 * @LastEditors: your name
 * @Description: 入口文件
 */
import { curry5, curry6 } from './js/curry.js';
import clone from './js/clone.js';
import Myset from './js/mySet.js';
import throttle from './js/throttle.js';
import debounce from './js/debounce.js';
import myInstanceOf from './js/myInstanceOf.js';
import createNew from './js/createNew.js';





// ==============================测试区域===================================
// curry.js 测试
// function f(x, y, z) {
//     return (x + y) * z
// }
// var g = curry5(f, 2)
// var g6 = curry6(f, 2)
// console.log(g(3, 5));
// console.log(g6(3, 5));



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

// ==============================throttle测试区域===================================

// function test() {
//     console.log('a');
// }
// const handle = throttle(test, 1000);
// window.onresize = function () {
//     handle();
// };
// handle();
// handle();
// handle();
// handle();
// handle();
// handle();
// handle();

// ==============================debounce测试区域===================================
// const handle = debounce(function (width) {
//     console.log(width);
// });
// window.onresize = function () {
//     handle(20);
// };

// ==============================myInstanceOf测试区域===================================
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }
// const person = new Person('luoxi')
// console.log(myInstanceOf(person, Person)); // logs: true
// console.log(myInstanceOf(person, Object)); // logs: true
// console.log(myInstanceOf(person, Array)); // logs: false

// ==============================createNew测试区域===================================
function Fun(age, name) {
    this.age = age;
    this.name = name;
}

// function Fun(age, name) {
//     this.age = age;
//     this.name = name;
//     return 1111;
// }

// function Fun(age, name) {
//     this.age = age;
//     this.name = name;
//     return { a: 1 };
// }

console.log(new createNew(Fun, 18, "张三"));