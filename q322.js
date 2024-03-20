/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  if (Math.min(...coins) > amount) return -1;

  coins.sort((a, b) => a - b);

  let tracker = Array(amount + 1).fill(null);
  tracker[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      let current = i;
      let target = current + coins[j];
      if (tracker[current] === null) break;
      if (target > amount) break;
      if (tracker[target] === null) tracker[target] = tracker[current] + 1;
      else tracker[target] = Math.min(tracker[target], tracker[current] + 1);
    }
  }
  return tracker[amount] || -1;
};

