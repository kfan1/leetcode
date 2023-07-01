/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  if (n === 1) return 1;
  let [i, l, r] = [1, 1, n];
  while (n > i) {
    while (r > l) l += ++i;
    if (r === l && n === i) return i;
    r += --n;
  }
  return -1;
};

console.log(pivotInteger(1));
let array = [];
for (let i = 0; i < 300000; i++) {
  if (pivotInteger(i) !== -1) array.push(i);
}
console.log(array);



/**
 * jimpulse's
 */

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  if (n === 1) return 1;

  let left = 0;
  let right = n;
  let l = 1;
  let r = n - 1;

  /**
   * left = 0
   * right = 37
   * l = 0
   * r = 36
   */

  while (l <= n) {
    if (left === right && r === l) {
      return r;
    }
    if (left < right) {
      left += l;
      l++;
    } else {
      right += r;
      r--;
    }
  }

  return -1;
};

console.log(pivotInteger(49));
