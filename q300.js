/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const tracker = new Array(nums.length).fill(0);
  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        tracker[i] = Math.max(tracker[i], tracker[j] + 1);
      }
    }
  }
  return Math.max(...tracker) + 1;
};
