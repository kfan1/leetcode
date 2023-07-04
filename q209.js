/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let length = Infinity;
  let res = [];
  let lp = 0;
  let rp = 1;
  let sum = nums[0];
  while (rp <= nums.length) {
    if (sum >= target) {
      if (rp - lp < length) {
        res = nums.slice(lp, rp);
        length = rp - lp;
      }
      sum -= nums[lp];
      lp++;
    } else {
      if (rp < nums.length) sum += nums[rp];
      rp++;
    }
  }
  return res.length;
};
