/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let lp = 0;
  let rp = numbers.length - 1;
  while (lp < rp) {
    if (numbers[lp] + numbers[rp] === target) return [lp + 1, rp + 1];
    if (numbers[lp] + numbers[rp] > target) rp--;
    if (numbers[lp] + numbers[rp] < target) lp++;
  }
};
