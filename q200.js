/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // first find and island
  // search through every tile marking all the ocean tiles you've been to until you hit land and start count at one
  // walk around the entire island, marking every spot to know you've already been to this island
  // find another island and add one to your count
  // keep going until you've been to every tile

  // traverse entire island function
  function traverseIsland(x, y) {
    // if you traverse outside the grid or into the ocean, stop
    if (x >= width || y >= height || x < 0 || y < 0) return;
    if (grid[y][x] === '0') return;
    if (grid[y][x] === 'x') return;
    // mark where you've been
    grid[y][x] = 'x';
    traverseIsland(x + 1, y);
    traverseIsland(x, y + 1);
    traverseIsland(x - 1, y);
    traverseIsland(x, y - 1);
  }

  // traverse entire grid
  function traverseMap(x = 0, y = 0) {
    // if you traverse outside the grid, stop
    if (y >= height) return;
    // if you hit an island traverse the island and increase count by one
    if (grid[y][x] === '1') {
      traverseIsland(x, y);
      count++;
    }
    // mark where you've been
    grid[y][x] = 'x';
    traverseMap(x, y + 1);
  }

  const width = grid[0].length;
  const height = grid.length;
  let count = 0;
  for (let i = 0; i < width; i++) {
    traverseMap(i);
  }

  return count;
};

grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

console.log(numIslands(grid));

grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(grid2));

grid3 = [['1', '0', '1', '1', '0', '1', '1']];

console.log(numIslands(grid3));

console.log(
  numIslands([
    ['1', '1', '1'],
    ['0', '1', '0'],
    ['1', '1', '1'],
  ])
);
