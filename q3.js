/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let set = new Set();
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    max = Math.max(i - left, max);
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
  }
  max = Math.max(s.length - left, max);
  return max;
};
