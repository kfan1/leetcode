/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let obj = {};

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] ? obj[s[i]]++ : (obj[s[i]] = 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (!obj[t[i]]) return false;
    obj[t[i]]--;
  }

  return true;
};

var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};
