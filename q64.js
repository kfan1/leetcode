// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var minPathSum = function (grid) {
//   let min = Infinity;
//   const height = grid.length - 1;
//   const width = grid[0].length - 1;
//   (function traverse(x = 0, y = 0, sum = 0) {
//     sum = sum + grid[y][x];
//     if (x === width && y === height) min = Math.min(sum, min);
//     else {
//       if (x < width) traverse(x + 1, y, sum);
//       if (y < height) traverse(x, y + 1, sum);
//     }
//   })();
//   return min;
// };

var minPathSum = function (grid) {
  const height = grid.length - 1;
  const width = grid[0].length - 1;

  for (let i = 1; i < grid[0].length; i++) {
    grid[0][i] = grid[0][i] + grid[0][i - 1];
  }

  for (let i = 1; i < grid.length; i++) {
    grid[i][0] = grid[i][0] + grid[i - 1][0];
  }

  for (let y = 1; y < grid.length; y++) {
    for (let x = 1; x < grid[0].length; x++) {
      grid[y][x] = Math.min(grid[y - 1][x], grid[y][x - 1]) + grid[y][x];
    }
  }
  return grid[height][width];
};
