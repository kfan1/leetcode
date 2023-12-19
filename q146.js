/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.currentAmount = 0;
  this.cache = {};
  this.LRUTracker = [];
  this.updateLRUFunction = function (key) {
    this.LRUTracker.splice(this.LRUTracker.indexOf(key), 1);
    this.LRUTracker.push(key);
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key] !== undefined) {
    this.updateLRUFunction(key);
    return this.cache[key];
  } else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key] !== undefined) {
    this.cache[key] = value;
    this.updateLRUFunction(key);
  } else if (this.currentAmount === this.capacity) {
    delete this.cache[this.LRUTracker[0]];
    this.LRUTracker.shift();
    this.cache[key] = value;
    this.LRUTracker.push(key);
  } else {
    this.currentAmount++;
    this.cache[key] = value;
    this.LRUTracker.push(key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// can implement a map to keep order and key value pairs at the same time
// or can use only an array without the object, array of key-value pairs
