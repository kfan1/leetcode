/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let start = i;
    while (nums[i] + 1 === nums[i + 1]) i++;
    let end = i;
    if (start === end) res.push(`${nums[start]}`);
    else res.push(`${nums[start]}->${nums[end]}`);
  }

  return res;
};
