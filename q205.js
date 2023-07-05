/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let charMap = {};
  let tSet = new Set();
  let newS = '';
  for (let i = 0; i < s.length; i++) {
    if (!charMap[s[i]] && !tSet.has(t[i])) charMap[s[i]] = t[i];
    tSet.add(t[i]);
    newS += charMap[s[i]];
  }
  return newS === t;
};
