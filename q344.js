var reverseString = function(s) {
    for(let i = 0; i<s.length; i++){
      let char = s[0]
      s.splice(s.length-i, 0, char)
      s.shift()
    }
    return s
    // s.reverse()
    // return s
};

console.log(reverseString(["h","e","l","l","o"]))