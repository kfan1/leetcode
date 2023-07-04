/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let sum = 0;
  let sign = true;
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    if (sign) {
      sign = !sign;
      sum += Number(n[i]);
    } else {
      sign = !sign;
      sum -= Number(n[i]);
    }
  }
  return sum;
};
