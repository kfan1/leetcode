// /**
//  * @param {number} n
//  * @return {number}
//  */
// var fib = function (n) {
//   if (n === 0) return 0;
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

var fib = function (n) {
  if (n === 0) return 0;
  let prev2 = 0;
  let prev1 = 1;
  let curr = 1;
  for (let i = 0; i < n - 1; i++) {
    curr = prev2 + prev1;
    prev2 = prev1;
    prev1 = curr;
  }
  return curr;
};
