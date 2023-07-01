/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) obj[nums[i]] ? obj[nums[i]]++ : (obj[nums[i]] = 1);
  return Array.from(new Set(nums.sort((a, b) => obj[b] - obj[a]))).slice(0, k);
};
