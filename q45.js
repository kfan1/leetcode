/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let tracker = [0];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums[i]; j++) {
      if (tracker[i + j + 1] === undefined) {
        tracker[i + j + 1] = tracker[i] + 1;
      }
    }
  }

  return tracker[nums.length - 1];
};
