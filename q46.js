var permute = function(nums) {
    var res = []
    function recurssive(n, arr){
        if(nums.length === arr.length) res.push(arr)
            
        else{
            for(let i=0; i<n.length; i++){
                recurssive(n.slice(0,i).concat(n.slice(i+1)), arr.concat(n[i]))
            }
        }
    }
    recurssive(nums, [])
    return res
};

console.log(permute([1,2,3]))