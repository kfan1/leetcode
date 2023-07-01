var intersect = function(nums1, nums2) {
    var newArr = []
    while(nums1.length !== 0){
        for(let n = 0; n<nums2.length; n++){
            if (nums1[0] === nums2[n]){
                newArr.push(nums1[0])                
                nums2.splice(n, 1)
                break
            }
        }
        nums1.shift()
    }
    return newArr
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))