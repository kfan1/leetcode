var RandomizedSet = function () {
  this.length = 0;
  this.set = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  let has = this.set.has(val);
  this.set.add(val);
  if (!has) this.length++;
  return !has;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.set.has(val)) this.length--;
  return this.set.delete(val);
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let random = Math.floor(Math.random() * this.length);
  return Array.from(this.set)[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
