/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let romanArr = [
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [10, 'X'],
    [5, 'V'],
    [1, 'I'],
  ];

  let res = '';
  for (let i = 0; i < romanArr.length; i++) {
    let times = Math.floor(num / romanArr[i][0]);
    let modulo;

    if (i !== romanArr.length - 1) modulo = Math.floor((num % romanArr[i][0]) / romanArr[i + 1][0]);

    num -= romanArr[i][0] * times;

    if (times === 1 && modulo === 4 && i !== 0) {
      res += romanArr[i + 1][1] + romanArr[i - 1][1];
      num -= romanArr[i][0] * modulo;
    } else if (times === 4 && i !== 0) {
      res += romanArr[i][1] + romanArr[i - 1][1];
    } else {
      for (let j = 0; j < times; j++) {
        res += romanArr[i][1];
      }
    }
  }

  return res;
};
