// var divide = function(dividend, divisor) {
//     if(dividend/divisor >= 0) return Math.floor(dividend/divisor)
//     else return Math.ceil(dividend/divisor)
// };

var divide = function(dividend, divisor) {
    let counter = 0
    let num = 0
    let isNegative = false
    if(dividend < 0 && divisor < 0){
        dividend = 0 - dividend
        divisor = 0 - divisor
    }
    else if(dividend < 0){
        isNegative = true
        dividend = 0 - dividend
    }
    else if(divisor < 0){
        isNegative = true
        divisor = 0 - divisor
    }
        
    while(num<dividend){
        num = num + divisor
        counter ++
    }
    let tick = 1
    if(num === dividend) tick = 0
    if(isNegative) return (tick-counter > -2147483648 ? tick-counter : -2147483648)
    else return (counter-tick < 2147483647 ? counter-tick : 2147483647)
};


console.log(divide(11, 3))
console.log(divide(15, 3))
console.log(divide(7, -3))