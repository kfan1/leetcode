/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var minAbsDifference = function(nums, goal) {
  let minDiff = Infinity;
  
    (function subset(numArr = nums, currSum = 0) {
      if (!numArr.length) return (minDiff = Math.min(Math.abs(currSum - goal), minDiff));
      for (let i = 0; i < numArr.length; i++) {
        subset(numArr.slice(0, i).concat(numArr.slice(i + 1)), currSum + numArr[i]);
        subset(numArr.slice(0, i).concat(numArr.slice(i + 1)), currSum);
      }
    })();
  
    return minDiff;
  };