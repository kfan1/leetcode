/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let min = prices[0];
  // let max = 0;
  // for (let i = 1; i < prices.length; i++) {
  //   min = Math.min(prices[i], min);
  //   max = Math.max(max, prices[i] - min);
  // }

  // return max;

  let left = 0;
  let right = 0;
  let max = 0;

  while (right < prices.length) {
    if (prices[right] < prices[left]) left = right;
    max = Math.max(max, prices[right] - prices[left]);
    right++;
  }

  return max;
};
