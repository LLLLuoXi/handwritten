/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-14 23:37:29
 * @LastEditors: your name
 * @Description: 
 */
export default class Myset {
  constructor(iterator = []) {
    if (typeof iterator[Symbol.iterator] !== 'function') {
      throw new TypeError(`${iterator}不是一个可迭代对象`);
    }
    this._data = [];
    for (const item of iterator) {
      this.add(item);
    }
  }

  add(data) {
    if (!this.has(data)) {
      this._data.push(data);
    }
  }

  has(data) {
    for (const item of this._data) {
      if (Object.is(item, data)) {
        return true;
      }
    }
    return false;
  }

  delete(data) {
    for (let i = 0; i < this._data.length; i++) {
      const elem = this._data[i];
      if (Object.is(elem, data)) {
        this._data.splice(i, 1);
        return true;
      }
    }
  }

  clear() {
    this._data.length = 0;
  }

  forEach(cb) {
    for (const item of this._data) {
      cb(item, item, this);
    }
  }

  get size() {
    return this._data.length;
  }

  *[Symbol.iterator]() {
    for (const item of this._data) {
      yield item;
    }
  }

  isEqual(data1, data2) {
    if (data1 === 0 && data2 === 0) {
      return true;
    }
    return Object.is(data1, data);
  }
}
