var isMatch = function(s, p) {
    if(p.length === 0) return s.length === 0
    var match = (s.length !== 0 && (p[0] === s[0] || p[0] === "."))
    if(p.length >= 2 && p[1] === "*") return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p))
    else return match && isMatch(s.slice(1), p.slice(1))
};

console.log(isMatch("aab", "c*a*b")) // true
console.log(isMatch("aa", "a*")) // true
console.log(isMatch("mississippi", "mis*is*p*.")) // false
console.log(isMatch("ab", ".*c")) // false
console.log(isMatch("ab", "abc")) // true
console.log(isMatch("aa", "a")) // false
console.log(isMatch("ab", ".*")) // true
console.log(isMatch("aaa", "a*a")) // true
console.log(isMatch("aaa", "ab*a*c*a")) // true
console.log(isMatch("ab", ".*..c*")) // true
console.log(isMatch("a", ".*..a*")) // false
console.log(isMatch("aasdfasdfasdfasdfas", "aasdf.*asdf.*asdf.*asdf.*s")) // true



// class Solution(object):
//     def isMatch(self, text, pattern):
//         memo = {}
//         def dp(i, j):
//             if (i, j) not in memo:
//                 if j == len(pattern):
//                     ans = i == len(text)
//                 else:
//                     first_match = i < len(text) and pattern[j] in {text[i], '.'}
//                     if j+1 < len(pattern) and pattern[j+1] == '*':
//                         ans = dp(i, j+2) or first_match and dp(i+1, j)
//                     else:
//                         ans = first_match and dp(i+1, j+1)

//                 memo[i, j] = ans
//             return memo[i, j]

//         return dp(0, 0)




// var isMatch = function(s, p) {
//     var matching = true

//     while(matching){
//         if((s.slice(-1) === p.slice(-1) || p.slice(-1) === ".") && (s.length !== 0 && p.length !== 0)){
//             s = s.slice(0, s.length-1)
//             p = p.slice(0, p.length-1)
//         }
//         else matching = false
//     }
 
//     let x = p.split("")
//     let y = x.filter(function(char){return char === "*"})
//     let a = s.split("")
//     if(a.length < x.length-(y.length*2)) return false

    

//     function recursion(str1, str2){   

//         if(str1.length === 0 && str2.length === 0) return true        
//         else if(str2.length === 0) return false

//         if(str2[1] === "*"){
//             var isStar = true
//             while(isStar){
//                 if((str1[0] === str2[0] || str2[0] === ".") && str1.length !== 0) str1 = str1.slice(1)
//                 else isStar = false
//             }
//             return recursion(str1, str2.slice(2))
//         }        

//         if(str1[0] === str2[0]) return recursion(str1.slice(1), str2.slice(1))
//         if(str2[0] === ".") return recursion(str1.slice(1), str2.slice(1))

//         if(str1.length === 0 && str2.length !== 0) return false
//     }

//     return recursion(a, x)
// };