/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  const res = [0, 0];
  n = n.toString(2);
  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] === '1') res[(n.length - i - 1) % 2]++;
  }
  return res;
};

var evenOddBit = function (n) {
  const res = [0, 0];
  n = n.toString(2).split('').reverse().join('');
  for (let i = 0; i < n.length; i++) {
    if (n[i] === '1') res[i % 2]++;
  }
  return res;
};
