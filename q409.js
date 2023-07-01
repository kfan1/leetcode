/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let cache = {};
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    if (!cache[s[i]]) cache[s[i]] = 0;
    cache[s[i]]++;
    if (cache[s[i]] % 2 === 0) length += 2;
  }
  return s.length > length ? length + 1 : length;
};
