// var letterCombinations = function(digits) {
//     const newDict = {
//         "2": ["a", "b", "c"],
//         "3": ["d", "e", "f"],
//         "4": ["g", "h", "i"],
//         "5": ["j", "k", "l"],
//         "6": ["m", "n", "o"],
//         "7": ["p", "q", "r", "s"],
//         "8": ["t", "u", "v"],
//         "9": ["w", "x", "y", "z"]
//     }
//     var res = []

//     if(digits.length === 0){
//         return res
//     }
//     else if(digits.length === 1){
//         for(let a=0; a<newDict[digits[0]].length; a++){
//             res.push(newDict[digits[0]][a])
//         }
//     }
//     else if(digits.length === 2){
//         for(let a=0; a<newDict[digits[0]].length; a++){
//             for(let b=0; b<newDict[digits[1]].length; b++){
//                 res.push(newDict[digits[0]][a]+newDict[digits[1]][b])
//             }
//         }
//     }
//     else if(digits.length === 3){
//         for(let a=0; a<newDict[digits[0]].length; a++){
//             for(let b=0; b<newDict[digits[1]].length; b++){
//                 for(let c=0; c<newDict[digits[2]].length; c++){
//                     res.push(newDict[digits[0]][a]+newDict[digits[1]][b]+newDict[digits[2]][c])
//                 }
//             }
//         }
//     }
//     else{
//         for(let a=0; a<newDict[digits[0]].length; a++){
//             for(let b=0; b<newDict[digits[1]].length; b++){
//                 for(let c=0; c<newDict[digits[2]].length; c++){
//                     for(let d=0; d<newDict[digits[3]].length; d++){
//                         res.push(newDict[digits[0]][a]+newDict[digits[1]][b]+newDict[digits[2]][c]+newDict[digits[3]][d])
//                     }
//                 }
//             }
//         }
//     }
//     return res
// };

// var letterCombinations = function(digits) {
//     const newDict = {
//         "2": ["a", "b", "c"],
//         "3": ["d", "e", "f"],
//         "4": ["g", "h", "i"],
//         "5": ["j", "k", "l"],
//         "6": ["m", "n", "o"],
//         "7": ["p", "q", "r", "s"],
//         "8": ["t", "u", "v"],
//         "9": ["w", "x", "y", "z"]
//     }
//     var res = []

//     function backtracking(str, index){
//         if(str.length === digits.length){
//             res.push(str)
//         }
//         else{
//             let chars = newDict[digits[index]]
//             for(let c of chars){
//                 backtracking(str+c, index+1)
//             }
//         }
//     }

//     backtracking("", 0)
//     return res

// };

// console.log(letterCombinations("2345"))

// function getPermutations(arr) {
//     var newArr = []

//     function recursion(initial, array){
//         if(initial.length === arr.length){
//             newArr.push(initial)
//         }
//         else{
//             for(let i=0; i<array.length; i++){
//                 recursion(initial.concat(array[i]), array.slice(0, i).concat(array.slice(i+1)))
//             }
//         }
//     }

//     recursion([], arr)
//     return newArr
// }

// console.log(getPermutations([1, 2, 3]))

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const numToLetters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  let res = [];
  if (digits.length === 0) return res;

  (function perm(digits, string) {
    if (!digits.length) return res.push(string);
    for (let i = 0; i < numToLetters[digits[0]].length; i++) {
      perm(digits.slice(1), string + numToLetters[digits[0]][i]);
    }
  })(digits, '');

  return res;
};
