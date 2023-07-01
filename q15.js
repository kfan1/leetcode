// var threeSum = function(nums) {
//     var newArr = []
//     var res = []
//     var allzeros = true
//     var zeroed = true

//     for(let i=0; i<nums.length; i++){
//         if(nums[i] !== 0){
//             allzeros = false
//         }
//     }

//     if(allzeros){
//         return [[0, 0, 0]]
//     }

//     for(let i=0; i<nums.length-2; i++){
//         for(let n=i+1; n<nums.length-1; n++){
//             for(let x=n+1; x<nums.length; x++){
//                 if(nums[i] === 0 && nums[n] === 0 && nums[x] === 0){
//                     if(zeroed){
//                         zeroed = false
//                         res.push([0, 0, 0])
//                     }
//                 }
//                 else if(nums[i]+nums[n]+nums[x] === 0){
//                     let tracker = true
//                     for(let j=0; j<newArr.length; j++){
//                         if(newArr[j][nums[i]] && newArr[j][nums[n]] && newArr[j][nums[x]]){
//                             tracker = false
//                         }
//                     }
//                     if(tracker){
//                         let newDict = {}
//                         newDict[nums[i]] = 1
//                         newDict[nums[n]] = 1
//                         newDict[nums[x]] = 1
//                         newArr.push(newDict)
//                         res.push([nums[i], nums[n], nums[x]])
//                     }

//                 }
//             }
//         }
//     }
//     return res
// };

var threeSum = function (nums) {
  var res = [];
  nums.sort(function (a, b) {
    return a - b;
  });
  for (let left = 0; left < nums.length; left++) {
    if (left > 0 && nums[left] === nums[left - 1]) {
    } else {
      let mid = left + 1;
      let right = nums.length - 1;
      while (mid < right) {
        let sum = nums[left] + nums[right] + nums[mid];
        if (sum < 0) {
          mid++;
        } else if (sum > 0) {
          right--;
        } else {
          res.push([nums[left], nums[mid], nums[right]]);
          while (mid < right && nums[mid] === nums[mid + 1]) {
            mid++;
          }
          while (mid < right && nums[right] === nums[right - 1]) {
            right--;
          }
          mid++;
          right--;
        }
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));
console.log(threeSum([4, 4, 3, -5, 0, 0, 0, -2, 3, -5, -5, 0]));


