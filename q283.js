var moveZeroes = function(nums) {
    var tracker = 0
    for(let i=0; i<nums.length; i++){
        console.log(nums)
        if(nums[i - tracker] === 0){            
            nums.splice(i-tracker, 1)
            nums.push(0)
            tracker ++            
        }
    }
    return nums
};

var x = [0, 0, 1]

moveZeroes(x)