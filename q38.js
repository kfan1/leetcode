// var countAndSay = function(n) {
//     function recurssive(start, end, str){
//         var res = ""
//         if(start === end) return str
//         else{
//             let i=0
//             while(i<str.length){
//                 var curr = str[i]
//                 var memo = 0
//                 while(curr === str[i]){
//                     memo++
//                     i++
//                 }
//                 res = res + memo + curr
//             }
//             return recurssive(start+1, end, res)
//         }
//     }

//     return recurssive(1, n, "1")
// };

var countAndSay = function(n) {
    let str = "1"
    
    for(let i=1; i<n; i++){
        let res = ""
        let x=0        
        while(x<str.length){
            let memo=0
            let curr = str[x]
            while(curr === str[x]){
                x++
                memo++
            }
            res = res + memo + curr
        }
        str = res
    }
    return str
};




console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))