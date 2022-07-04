/*
 * @Author: luoxi
 * @LastEditTime: 2022-07-04 23:15:13
 * @LastEditors: your name
 * @Description: 
 */

function myReduce(fn, initValue) {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw new Error("current params in not correct")
    }
    let arr = this;
    let initIndex;
    let acc;
    initIndex = arguments.length === 1 ? 1 : 0;
    acc = arguments.length === 1 ? arr[0] : initValue;
    for (let i = initIndex; i < arr.length; i++) {
        acc = fn(acc, arr[i], i, arr)
    }
    return acc;
}

const arr = [1, 2, 3, 4, 5]
Array.prototype.myReduce = myReduce;
let res = arr.myReduce((pre, cur) => { return pre + cur })
console.log('res', res) // 15
let res1 = arr.myReduce((pre, cur) => { return pre + cur }, 10)
console.log('res1', res1) // 25