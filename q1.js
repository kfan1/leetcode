/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]]) return [obj[target - nums[i]] - 1, i];
    else obj[nums[i]] = i + 1;
  }
};
