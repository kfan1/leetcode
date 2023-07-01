/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
  const set = new Set();
  for (let i = 1; i <= n; i++) set.add(i);
  let curr = 1;
  let i = 1;
  let ik = i * k;
  while (set.has(curr)) {
    set.delete(curr);
    curr += ik;
    i++;
    ik = i * k;
    while (curr > n) curr -= n;
  }
  return Array.from(set);
};