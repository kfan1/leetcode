var isPowerOfThree = function(n) {
    // var x = (Math.log(n) / Math.log(3)).toFixed(14)    
    // return x % 1 === 0
    if(n<1){
        return false
    }
    
    while (n>1){
        n = n/3
        if(n % 1 != 0){
            return false
        }
    }
    return true
};
console.log(isPowerOfThree(27))
console.log(isPowerOfThree(387420488))