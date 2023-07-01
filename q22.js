// var generateParenthesis = function(n) {
//     var res = []
//     function recursion(str, leftCounter, rightCounter){
//         if(str.length === n*2){
//             res.push(str)
//         }
//         else{
//             if(leftCounter<n) recursion(str+"(", leftCounter+1, rightCounter)
//             if(rightCounter<leftCounter) recursion(str+")", leftCounter, rightCounter+1)
//         }
//     }

//     recursion("", 0, 0)

//     return res
// };

// console.log(generateParenthesis(3))

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  (function perm(totalLeft, totalRight, string) {
    if (totalRight === n) return res.push(string);
    if (totalLeft < n) perm(totalLeft + 1, totalRight, string + '(');
    if (totalLeft > totalRight) perm(totalLeft, totalRight + 1, string + ')');
  })(0, 0, '');
  return res;
};
