/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  satisfaction = satisfaction.sort((a, b) => a - b);
  let max = 0;
  while (satisfaction.length) {
    let currSum = 0;
    for (let i = 0; i < satisfaction.length; i++) {
      currSum += (i + 1) * satisfaction[i];
    }
    max = Math.max(max, currSum);
    satisfaction.shift();
  }
  return max;
};
