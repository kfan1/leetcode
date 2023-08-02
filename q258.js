/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let newSum = num;
  num = String(num);
  while (num.length > 1) {
    newSum = 0;
    for (let i = 0; i < num.length; i++) {
      newSum += Number(num[i]);
    }
    num = String(newSum);
  }

  return newSum;
};
