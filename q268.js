var missingNumber = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums.includes(i) === false){
            return i
        }
    }
    return nums.length
};

// much faster solution
// var missingNumber = function(nums) {
//     let total = 0;
//     for(let i = 0; i<nums.length; i++){
//         total += nums[i]
//     }
//     return ((nums.length+1)*(nums.length/2))-total
// };