/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function (candidates, target) {
//   let set = new Set();

//   (function perm(candidates, target, permObj) {
//     if (target === 0) return set.add(JSON.stringify(permObj));
//     if (target < 0) return;
//     for (let i = 0; i < candidates.length; i++) {
//       let copyObj = { ...permObj };
//       let candidate = candidates[i];
//       copyObj[candidate] ? copyObj[candidate]++ : (copyObj[candidate] = 1);
//       perm(candidates, target - candidates[i], copyObj);
//     }
//   })(candidates, target, {});

//   const array = Array.from(set);
//   let res = [];
//   array.forEach((el) => {
//     let obj = JSON.parse(el);
//     let perm = [];
//     for (let key in obj) {
//       for (let i = 0; i < obj[key]; i++) {
//         perm.push(Number(key));
//       }
//     }
//     res.push(perm);
//   });
//   return res;
// };

var combinationSum = function(candidates, target) {
  const res = []
  (function perm())
  function dfs(currSum, currComb, startIdx) {
      if (currSum > target) return;
      if (currSum === target) {
          results.push(currComb);
          return;
      }
      for (let i = startIdx; i < candidates.length; i++) {
          if (currSum + candidates[i] <= target) {
              const newComb = currComb.slice();
              newComb.push(candidates[i]);
              dfs(currSum + candidates[i], newComb, i);
          }
      }
  }
  dfs(0, [], 0);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
