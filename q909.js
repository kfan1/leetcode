// /**
//  * @param {number[][]} board
//  * @return {number}
//  */
// // this is dfs which will work but is very very slow
// var snakesAndLadders = function (board) {
//   const boardObj = {};
//   let counter = 0;
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       counter++;
//       boardObj[counter] = board[i][j];
//     }
//   }
//   let min = Infinity;
//   (function possibleTraversals(curr, turns, squaresAlreadyBeenTo) {
//     squaresAlreadyBeenTo.add(curr);
//     if (boardObj[curr] != -1 && !squaresAlreadyBeenTo.has(curr)) {
//       curr = boardObj[curr];
//       turns++;
//       squaresAlreadyBeenTo.add(curr);
//     }
//     if (curr >= counter) min = Math.min(turns, min);
//     else {
//       for (let i = 1; i <= 6; i++) {
//         possibleTraversals(curr + i, turns + 1, squaresAlreadyBeenTo);
//       }
//     }
//   })(1, 0, new Set());

//   return min;
// };

var snakesAndLadders = function (board) {
  const boardObj = {};
  let counter = 0;
  boolSwitch = true;
  for (let i = board.length - 1; i >= 0; i--) {
    if (boolSwitch) {
      for (let j = 0; j < board[0].length; j++) {
        counter++;
        boardObj[counter] = board[i][j];
      }
      boolSwitch = !boolSwitch;
    } else {
      for (let j = board[0].length - 1; j >= 0; j--) {
        counter++;
        boardObj[counter] = board[i][j];
      }
      boolSwitch = !boolSwitch;
    }
  }

  let queue = [[1, 0]];
  let curr;
  const squaresAlreadyBeenTo = new Set();

  while (queue.length) {
    curr = queue.shift();

    if (squaresAlreadyBeenTo.has(curr[0])) continue;
    squaresAlreadyBeenTo.add(curr[0]);

    if (curr[0] < counter) {

      if (boardObj[curr[0]] != -1) {
        curr[0] = boardObj[curr[0]];
        if (curr[0] >= counter) return curr[1];
      }
      
      for (let i = 1; i <= 6; i++) queue.push([curr[0] + i, curr[1] + 1]);
    } else return curr[1];
  }

  return -1;
};

console.log(
  snakesAndLadders([
    [-1, -1],
    [-1, 3],
  ])
);

console.log(
  snakesAndLadders([
    [-1, 1, 2, -1],
    [2, 13, 15, -1],
    [-1, 10, -1, -1],
    [-1, 6, 2, 8],
  ])
);

console.log(
  snakesAndLadders([
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
  ])
);

console.log(
  snakesAndLadders([
    [-1, -1, -1],
    [-1, 9, 8],
    [-1, 8, 9],
  ])
);

console.log(
  snakesAndLadders([
    [1, 1, -1],
    [1, 1, 1],
    [-1, 1, 1],
  ])
);

console.log(
  snakesAndLadders([
    [1, 1, -1],
    [1, 1, 1],
    [-1, 1, 1],
  ])
);

console.log(
  snakesAndLadders([
    [-1, -1, 30, 14, 15, -1],
    [23, 9, -1, -1, -1, 9],
    [12, 5, 7, 24, -1, 30],
    [10, -1, -1, -1, 25, 17],
    [32, -1, 28, -1, -1, 32],
    [-1, -1, 23, -1, 13, 19],
  ])
);
