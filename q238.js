/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let res1 = [1];
  for (let i = 0; i < nums.length - 1; i++) {
    res1.push(res1[i] * nums[i]);
  }

  nums.reverse();
  let res2 = [1];
  for (let i = 0; i < nums.length - 1; i++) {
    res2.push(res2[i] * nums[i]);
  }

  res2.reverse();
  let res = [];
  for (let i = 0; i < res1.length; i++) {
    res.push(res1[i] * res2[i]);
  }

  return res;
};
