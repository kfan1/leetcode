/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  let validBlocks = grid.length * grid[0].length - 1;
  let [x, y] = [0, 0];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === -1) validBlocks--;
      if (grid[i][j] === 1) {
        [x, y] = [j, i];
        grid[i][j] = 0;
      }
    }
  }

  let theWays = 0;

  function helper(grid, walkedOn, x, y) {
    if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length) return;
    else if (grid[y][x] === 2) {
      if (walkedOn === validBlocks) theWays++;
    } else if (grid[y][x] === -1 || grid[y][x] === 1) return
    else {
      walkedOn++;
      grid[y][x] = 1;
      helper(grid, walkedOn, ++x, y);
      x--;
      helper(grid, walkedOn, --x, y);
      x++;
      helper(grid, walkedOn, x, ++y);
      y--;
      helper(grid, walkedOn, x, --y);
      y++;
      grid[y][x] = 0;
      walkedOn--;
    }
  }

  helper(grid, 0, x, y);
  return theWays;
};

console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, -1],
  ])
);

/**
 * jimpulse's lol
 */

//  Init result variable

//  Figure out how many walkable block there are...
//  Iterate over the matrix, and add one to walkable blocks if current element is not -1

//  Traverse the grid => Helper function?
//  Need starting position
//  Initialize squares walked var
//  Move one direction, check if in bounds || on a -1 || on a 1 => skip current iteration
//  If current value is a 0, add 1 to walked
//  Elif current value is a 2 && walked === walkable, add one to result
//  Elif current value is a 2 && walked !== walkable, skip current iteration
// If current location is ending and walked === walkable, add one to result

//  Figure out where we're starting

// var uniquePathsIII = function (grid) {
//     let output = 0;
//     let walkableBlocks = 0;
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] !== -1) walkableBlocks++
//         }

//     }

//     const directions = [[1,0],[0,1],[-1,0],[0,-1]]

//     function traverse(x, y, walked) {

//         for (let i = 0; i < directions.length; i++) {
//             const direction = directions[i]
//             x = x + direction[0]
//             y = y + direction[1]

//             if (x < 0 || y < 0 || x === grid.length || y === grid[0].length || grid[x][y] === 1 || grid[x][y] === -1) continue

//             if (grid[x][y] === 2 && walked === walkableBlocks) {
//                 output++
//             }

//             if (grid[x][y] === 2) {
//                 continue;
//             }

//             grid[x][y] === 1
//             walked++
//             traverse(x, y, walked)
//             grid[x][y] === 0
//         }
//     }

//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] === 1) traverse(i, j, 1)
//         }

//     }

//     return output;
// }
