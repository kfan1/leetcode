/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let sum = 0;
  let sign = true;
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    sign ? (sum += Number(n[i])) : (sum -= Number(n[i]));
    sign = !sign;
  }
  return sum;
};
