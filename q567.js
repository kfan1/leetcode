/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// var checkInclusion = function (s1, s2) {
//   const constSet = new Set(s1.split(''));
//   let substring = [];
//   let array = s1.split('');

//   for (let i = 0; i < s2.length; i++) {
//     if (!constSet.has(s2[i])) {
//       array = s1.split('');
//       substring = [];
//     } else {
//       while (!array.includes(s2[i])) array.push(substring.shift());
//     }
//     if (array.includes(s2[i])) {
//       substring.push(s2[i]);
//       array.splice(array.indexOf(s2[i]), 1);
//     }

//     if (!array.length) return true;
//   }
//   return false;
// };

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

var checkInclusion = function (s1, s2) {
  for (let i = 0; i <= s2.length - s1.length; i++) if (isAnagram(s1, s2.slice(i, i + s1.length))) return true;
  return false;
};

console.log(checkInclusion('adc', 'dcda'));
