/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let slope = (coordinates[0][1] - coordinates[1][1]) / (coordinates[0][0] - coordinates[1][0]);
  if (slope === -Infinity) slope = Infinity;
  let currSlope;
  for (let i = 1; i < coordinates.length - 1; i++) {
    currSlope = (coordinates[i][1] - coordinates[i + 1][1]) / (coordinates[i][0] - coordinates[i + 1][0]);
    if (currSlope === -Infinity) currSlope = Infinity;
    if (currSlope !== slope) return false;
  }
  return true;
};

