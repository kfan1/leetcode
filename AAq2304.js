/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
// var minPathCost = function (grid, moveCost) {
//   let min = Infinity;

//   function recursion(currNum, layer = 0, sum = 0) {
//     if (sum > min) return;
//     if (layer === grid.length - 1) min = Math.min(sum + currNum, min);
//     else {
//       for (let i = 0; i < grid[0].length; i++) {
//         recursion(grid[layer + 1][i], layer + 1, sum + currNum + moveCost[currNum][i]);
//       }
//     }
//   }

//   for (let i = 0; i < grid[0].length; i++) recursion(grid[0][i]);

//   return min;
// };

var minPathCost = function (grid, moveCost) {
  const rows = grid.length;
  const cols = grid[0].length;
  const cache = [];

  for (let i = 0; i < rows; i++) cache.push(Array(cols).fill(null));

  function move(row, col) {
    const val = grid[row][col];
    if (cache[row][col] !== null) return cache[row][col];
    if (row === rows - 1) return val;
    let ans = Infinity;

    for (let i = 0; i < cols; i++) {
      const addCost = moveCost[val][i];
      ans = Math.min(ans, move(row + 1, i) + val + addCost);
    }

    cache[row][col] = ans;
    return ans;
  }

  let ans = Infinity;
  for (let i = 0; i < cols; i++) ans = Math.min(ans, move(0, i));
  return ans;
};
