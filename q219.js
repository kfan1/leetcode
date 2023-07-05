/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let numIndexMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (numIndexMap[nums[i]] !== undefined) {
      if (i - numIndexMap[nums[i]] <= k) return true;
    }
    numIndexMap[nums[i]] = i;
  }

  return false;
};
