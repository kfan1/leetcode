/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// I think works but is super slow

// var wordBreak = function (s, wordDict) {
//   if (s.length === 0) return true;

//   for (let i = s.length; i > 0; i--) {
//     if (wordDict.includes(s.slice(0, i))) {
//       if (wordBreak(s.slice(i), wordDict)) return true;
//     }
//   }
//   return false;
// };

var wordBreak = function (s, wordDict) {
  const arrayTrackerWhereToSlice = [true, ...Array(s.length).fill(false)];
  const longestWordInDict = Math.max(...wordDict.map((word) => word.length));
  const shortestWordInDict = Math.min(...wordDict.map((word) => word.length));
  for (let i = shortestWordInDict; i <= s.length; i++) {
    for (let j = i - 1; j >= Math.max(i - longestWordInDict, 0); j--) {
      if (arrayTrackerWhereToSlice[j] && wordDict.includes(s.slice(j, i))) {
        arrayTrackerWhereToSlice[i] = true;
        break;
      }
    }
  }
  return arrayTrackerWhereToSlice[s.length];
};

console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
