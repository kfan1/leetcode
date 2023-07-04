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


var combinationSum = function (candidates, target) {
  const res = [];
  (function comb(currComb, target, currIndex) {
    if (target < 0) return;
    if (target === 0) res.push(currComb);
    else {
      for (let i = currIndex; i < candidates.length; i++) {
        comb([...currComb, candidates[i]], target - candidates[i], i);
      }
    }
  })([], target, 0);

  return res;
};

