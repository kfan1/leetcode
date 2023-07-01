// var maxSubArray = function(nums) {
//     if(Math.max(...nums) <= 0) return Math.max(...nums)

//     let currMax = []

//     function recursive(arr){
//         while(arr[0] < 0) arr.splice(0, 1)
//         while(arr[arr.length-1] < 0) arr.splice(arr.length-1)

//         if(arr.length === 0){}
//         else{
//             if(arr.reduce((x, y) => x+y, 0) > currMax.reduce((x, y) => x+y, 0)) currMax = arr
//             recursive(arr.slice(1)) ? arr[0] < arr[arr.length-1] : recursive(arr.slice(0, arr.length-1))
//         }
//     }

//     recursive(nums)

//     return currMax.reduce((x, y) => x+y, 0)
// };

var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let currSum = nums[0]
    for(let i=1; i<nums.length; i++){
        currSum = Math.max(currSum+nums[i], nums[i])
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum
}; 


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArray([0,-3,-2,-3,-2,2,-3,0,1,-1])) // 2
console.log(maxSubArray([3,2,-3,-1,1,-3,1,-1])) // 5
console.log(maxSubArray([-1])) // -1
console.log(maxSubArray([1, -2, 0])) // 1
console.log(maxSubArray([1, -1, -2])) // 1
console.log(maxSubArray([-2, 1, 0, -3])) // 1
console.log(maxSubArray([-84,-87,-78,-16,-94,-36,-87,-93,-50,-22,-63,-28,-91,-60,-64,-27,-41,-27,-73,-37,-12,-69,-68,-30,-83,-31,-63,-24,-68,-36,-30,-3,-23,-59,-70,-68,-94,-57,-12,-43,-30,-74,-22,-20,-85,-38,-99,-25,-16,-71,-14,-27,-92,-81,-57,-74,-63,-71,-97,-82,-6,-26,-85,-28,-37,-6,-47,-30,-14,-58,-25,-96,-83,-46,-15,-68,-35,-65,-44,-51,-88,-9,-77,-79,-89,-85,-4,-52,-55,-100,-33,-61,-77,-69,-40,-13,-27,-87,-95,-40]))