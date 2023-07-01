/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return '';

  const tObj = {};
  for (let i = 0; i < t.length; i++) {
    tObj[t[i]] = tObj[t[i]] + 1 || 1;
  }

  const tCopy = { ...tObj };
  const tracker = {};
  let res = '';
  let l = 0;
  let r = 0;

  while (r < s.length) {
    if (tObj[s[r]]) {
      tracker[s[r]] = tracker[s[r]] + 1 || 1;
      tCopy[s[r]]--;
      if (!tCopy[s[r]]) delete tCopy[s[r]];
      r++;
    } else if (Object.keys(tCopy).length) r++;
    while (!Object.keys(tCopy).length) {
      if (tracker[s[l]]) {
        if (!res.length) res = s.slice(l, r);
        else res = r - l < res.length ? s.slice(l, r) : res;
        tracker[s[l]]--;
        if (tracker[s[l]] < tObj[s[l]]) tCopy[s[l]] = tCopy[s[l]] + 1 || 1;
        if (!tracker[s[l]]) delete tracker[s[l]];
      }
      l++;
    }
  }

  return res;
};
