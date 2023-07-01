var searchRange = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            for(let n=i; n<nums.length; n++){
                if(nums[n+1] !== target) return [i, n]
            }
        }
    }
    return [-1, -1]
};


// var searchRange = function(nums, target) {
//     return [nums.indexOf(target), nums.lastIndexOf(target)];
// };