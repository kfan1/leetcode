/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  slow = nums[slow];
  fast = nums[nums[fast]];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast]; // same speed as slow
  }
  return slow;
};

console.log(findDuplicate([3, 1, 3, 4, 2]));
