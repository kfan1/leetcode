/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sP = 0;
  let tP = 0;
  while (sP < s.length && tP < t.length) {
    if (s[sP] === t[tP]) {
      sP++, tP++;
    } else tP++;
  }
  return sP === s.length ? true : false;
};
