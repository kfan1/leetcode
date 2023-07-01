/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function (stones) {
  while (stones.length > 1) stones.splice(stones.indexOf((n = [stones.splice(stones.indexOf((m = Math.max(...stones))), 1), Math.max(...stones)][1])), 1, m - n !== 0 ? m - n : null);
  return stones[0] ? stones[0] : 0;
};

// stones.push((x = stones.sort((a,b) => a-b).pop() - y = stones.pop()) ? x - y : undefined )

var lastStoneWeight1 = function (stones) {
  // stones.push(((x = stones.sort((a, b) => a - b).pop()) - (y = stones.pop())) ? x - y : undefined)
  while (stones.length > 1) stones.length > 1 ? (x = stones.sort((a, b) => a - b).pop()) - (y = stones.pop()) ? stones.push(x - y) : false : false;
  return stones.length ? stones[0] : 0;
};

console.log(lastStoneWeight1([2, 7, 4, 1, 8, 1]));
