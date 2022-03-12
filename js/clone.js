/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-12 16:50:30
 * @LastEditors: your name
 * @Description: 克隆 ，包括浅克隆和深克隆
 */
/**
 * @description: 克隆 ，包括浅克隆和深克隆
 * @param {*} obj   要克隆对象
 * @param {*} deep  是否深度克隆
 * @return {*}
 */
export default function clone(obj, deep) {
    if (Array.isArray(obj)) {
        // 数组
        if (deep) {
            // 深度克隆
            let newArray = [];
            for (let i = 0; i < obj.length; i++) {
                newArray.push(clone(obj[i], deep))
            }
            return newArray
        } else {
            return obj.splice()
        }
    } else if (typeof obj === 'object') {
        let newObj = {};
        for (const key in obj) {
            if (deep) {
                newObj[key] = clone(obj[key], deep)

            } else {
                newObj[key] = obj[key]
            }
        }
        return newObj
    } else {
        // 函数原型或原始类型
        return obj;
    }
}