/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let row = 1; row < triangle.length; row++) {
    for (let index = 0; index < triangle[row].length; index++) {
      if (index === 0) {
        triangle[row][0] = triangle[row][0] + triangle[row - 1][0];
      } else if (index === triangle[row].length - 1) {
        triangle[row][index] = triangle[row][index] + triangle[row - 1][triangle[row - 1].length - 1];
      } else {
        triangle[row][index] = Math.min(triangle[row - 1][index - 1], triangle[row - 1][index]) + triangle[row][index];
      }
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
};
