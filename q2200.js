/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const allJ = [];
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) allJ.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < allJ.length; j++) {
      if (Math.abs(i - allJ[j]) <= k) set.add(i);
    }
  }

  return Array.from(set);
};


/**
 * jimpulse 
 * THE WORST WAY TO DO THIS PROBLEM LMAO
 */

var findKDistantIndices = function(nums, key, k) {
  const keyIndex = []
  const output = []
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] === key) keyIndex.push(j)
  }
  let val;
  while (keyIndex.length) {
      val = keyIndex.pop()

      for (let i = 0; i < nums.length; i++) {
          if (Math.abs(i - val) <= k) output.push(i) 
      }
  }

  const set = new Set(output)

  return [...set].sort((a,b) => a-b)


};