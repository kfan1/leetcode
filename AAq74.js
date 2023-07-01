/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length - 1;
  let length = matrix[0].length - 1;

  if (left === right && length === 0) {
    if (matrix[0][0] === target) return true;
    else return false;
  }

  if (left === right) {
    let m = left;
    left = 0;
    right = length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (target === matrix[m][left] || target === matrix[m][right] || target === matrix[m][mid]) return true;
      if (target > matrix[m][mid]) left = mid;
      if (target < matrix[m][mid]) right = mid;
    }

    return false;
  }

  if (length === 0) {
    matrix = matrix.flat();
    let left = 0;
    let right = matrix.length - 1;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (target === matrix[left] || target === matrix[right] || target === matrix[mid]) return true;
      if (target > matrix[mid]) left = mid;
      if (target < matrix[mid]) right = mid;
    }
    return false;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target === matrix[mid][0] || target === matrix[mid][length]) return true;
    if (target > matrix[mid][0]) left = mid;
    if (target < matrix[mid][length]) right = mid;
  }

  let m = left;
  left = 0;
  right = length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target === matrix[m][left] || target === matrix[m][right] || target === matrix[m][mid]) return true;
    if (target > matrix[m][mid]) left = mid;
    if (target < matrix[m][mid]) right = mid;
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 1],
      [2, 2],
    ],
    2
  )
);
