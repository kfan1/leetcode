/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, set = new Set()) {
  if (n === 1) return true;
  if (set.has(n)) return false;
  set.add(n);
  nArr = String(n).split('');
  return isHappy(
    nArr.reduce((acc, curr) => acc + Number(curr) ** 2, 0),
    set
  );
};
