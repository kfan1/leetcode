// var myPow = function(x, n) {
//     return Math.pow(x, n)    
// };

var myPow = function(x, n) {
    let a = x
    if(n>0) for(let i=1; i<n; i++) x = x*a
    if(n<=0) for(let i=1; i>n; i--) x = x/a
    return x
};

console.log(myPow(2.00000, 10))
console.log(myPow(2.00000, -2))
console.log(myPow(2.00000, 0))