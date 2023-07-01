/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// var dailyTemperatures = function (temperatures) {
//   let res = Array(temperatures.length).fill(0);
//   for (let i = 0; i < temperatures.length - 1; i++) {
//     for (let j = i + 1; j < temperatures.length; j++) {
//       if (temperatures[i] < temperatures[j]) {
//         res[i] = j - i;
//         break;
//       }
//     }
//   }
//   return res;
// };

var dailyTemperatures = function (temperatures) {
  let res = Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let temp = stack.pop();
      res[temp] = i - temp;
    }
    stack.push(i);
  }

  return res;
};

