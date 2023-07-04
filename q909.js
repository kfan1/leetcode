/**
 * @param {number[][]} board
 * @return {number}
 */
// this is dfs which will work but is very very slow
var snakesAndLadders = function (board) {
  const boardObj = {};
  let counter = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      counter++;
      boardObj[counter] = board[i][j];
    }
  }
  let min = Infinity;
  (function possibleTraversals(curr, turns, squaresAlreadyBeenTo) {
    squaresAlreadyBeenTo.add(curr);
    if (boardObj[curr] != -1 && !squaresAlreadyBeenTo.has(curr)) {
      curr = boardObj[curr];
      turns++;
      squaresAlreadyBeenTo.add(curr);
    }
    if (curr >= counter) min = Math.min(turns, min);
    else {
      for (let i = 1; i <= 6; i++) {
        possibleTraversals(curr + i, turns + 1, squaresAlreadyBeenTo);
      }
    }
  })(1, 0, new Set());

  return min;
};

var snakesAndLadders = function (board) {
  const boardObj = {};
  let counter = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      counter++;
      boardObj[counter] = board[i][j];
    }
  }
  let min = Infinity;

  // queue = [currPos, turnNum]
  let queue = [[1, 0]];
  let curr;

  while (queue.length) {
    curr = queue.shift();
    if (curr[0] < counter) {
      if (boardObj[curr[0]] != -1) {
        temp = boardObj[curr[0]];
        boardObj[curr[0]] = -1;
        queue.push(temp, curr[1] + 1);
      } else {
        for (let i = 1; i <= 6; i++) {
          queue.push([curr[0] + i, curr[1] + 1]);
        }
      }
    } else {
      min = Math.min(curr[1], min);
    }
  }

  return min;
};
