// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function (nums) {
//   let jumpsRequired = 1;
//   for (let i = nums.length - 2; i >= 0; i--) {
//     if (nums[i] >= jumpsRequired) jumpsRequired = 1;
//     else jumpsRequired++;
//   }
//   return jumpsRequired === 1;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goal = nums.length - 1;
  let ended = false;
  (function jumps(nums, currIndex) {
    if (ended) return;
    if (currIndex >= goal) ended = true;
    else if (nums[currIndex] === 0) return;
    else {
      for (let i = 1; i <= nums[currIndex]; i++) {
        jumps(nums, currIndex + i);
      }
    }
  })(nums, 0);

  return ended;
};

