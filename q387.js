var firstUniqChar = function(s) {
    var newDict = {}
    for(let i = 0; i<s.length; i++){
        if(!(s[i] in newDict)){
            newDict[s[i]] = 0
        }
        else{
            newDict[s[i]]++
        }
        
    }
    for(let i = 0; i<s.length; i++){
        if(newDict[s[i]] === 0){
            return i
        }
    }
    return -1
};

// var firstUniqChar = function(s) {
//     for(let i=0; i<s.length; i++){
//         tracker = true
//         for(let n=0; n<s.length; n++){
//             if(s[i] === s[n] && i !== n){
//                 tracker = false
//             }
//         }
//         if(tracker){
//             return i
//         }
//     }
//     return -1
// };

