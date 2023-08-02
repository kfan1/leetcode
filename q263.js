/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  // if (n <= 0) return false;
  // let i = 2;
  // while (i <= n) {
  //   if (n % i === 0) {
  //     if (i !== 2 && i !== 3 && i !== 5) return false;
  //     n = n / i;
  //   } else {
  //     i++;
  //   }
  // }
  // return true;
  while (n % 2 === 0) n = n / 2;
  while (n % 3 === 0) n = n / 3;
  while (n % 5 === 0) n = n / 5;
  return n === 1;
};

console.log(isUgly(1728786259));
