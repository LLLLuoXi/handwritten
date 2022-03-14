/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-12 17:08:25
 * @LastEditors: your name
 * @Description: 函数柯里化,用户固定某个函数的前面的参数，得到一个新的函数，新的函数调用时，接收剩余的参数
 */

export function curry5(fn) {
    // 得到下标1开始的参数
    let args = Array.prototype.slice.call(arguments, 1);
    const that = this;
    return function () {
        // 当前调用函数的参数
        const curArgs = Array.from(arguments);
        const allArgs = args.concat(curArgs);
        // fn.length 表示fn接受几个形参
        if (allArgs.length >= fn.length) {
            // 参数数量够了
            return fn.apply(null, allArgs);
        } else {
            //参数不够
            allArgs.unshift(fn);
            return that.curry.apply(that, allArgs);
        }
    };
}


export function curry6(fn, ...args) {
    // 得到下标1开始的参数
    const that = this;
    return function () {
        // 当前调用函数的参数
        const allArgs = [...args, ...arguments];
        if (allArgs.length >= fn.length) {
            // 参数数量够了
            return fn(...allArgs);
        } else {
            //参数不够
            return that.curry6(fn, ...allArgs);
        }
    };
}