// var groupAnagrams = function(strs) {
//     let res = []
//     let unique = []
//     for(let i=0; i<strs.length; i++){
//         let temp = strs[i].split("").sort().join("")
//         if(!(unique.includes(temp))){
//             unique.push(temp)
//             res.push([strs[i]])
//         }
//         else{
//             res[unique.indexOf(temp)].push(strs[i])
//         }
//     }
//     return res
// };

// var groupAnagrams = function(strs) {
//     var map = {};

//     for(var str of strs) {
//         var s = str.split('').sort().join('')
//         if(!map[s]) map[s] = []
//         map[s].push(str)
//     }
//     return Object.values(map)
// };

var groupAnagrams = function (strs) {
  const map = {};

  for (let str of strs) {
    let s = str.split('').sort().join('');
    if (!map[s]) map[s] = [];
    map[s].push(str);
  }

  return Object.values(map);
};
