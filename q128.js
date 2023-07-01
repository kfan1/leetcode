// where is this from?
// var longestConsecutive = function(nums) {
//   list_of_seq = []
//   times_combined = 0
//   for(let i=0; i<nums.length; i++){
//       t1 = 0
//       t2 = 0
//       combine1 = false
//       combine2 = false
//       for(let n=0; n<list_of_seq.length; n++){
//           if(list_of_seq[n][0]+1==nums[i]){
//               list_of_seq[n].push(nums[i])
//               combine1 = true
//               t1 = n
//           }
//           if(list_of_seq[n][0]-1==nums[i]){
//               list_of_seq[n].unshift(nums[i])
//               combine2 = true
//               t2 = n
//           }
//           if(combine1 && combine2){
//               list_of_seq[t1] = list_of_seq[t1].concat(list_of_seq[t2])
//               combine1 = false
//               combine2 = false
//               times_combined ++
//           }
//       }
//       if(!combine1 || !combine2) list_of_seq.push([nums[i]])
//   }

//   const lengths = list_of_seq.map(a=>a.length);
//   return Math.max(...lengths) - times_combined
// };

var longestConsecutive = function (nums) {
  // not sure is sorting algorithm is linear time
  nums.sort((a, b) => a - b);
  // have to get rid of repeats, they do not count towards length or break the consecutiveness
  // can throw array into set but set is unordered so we can do array to set to array?
  nums = [...new Set(nums)];
  let max = 1;
  let curr = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      curr++;
      max = Math.max(curr, max);
    } else curr = 1;
  }
  return max;
};

console.log(longestConsecutive([1, 2, 0, 1]));
