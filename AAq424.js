/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var characterReplacement = function (s, k) {
//   let maxLength = s.length;

//   if (k === 0) {
//     let longestString = 0;
//     let char = s[0];
//     let currLength = 0;
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] !== char) {
//         longestString = Math.max(currLength, longestString);
//         currLength = 0;
//       }
//       currLength++;
//       char = s[i];
//     }
//     longestString = Math.max(currLength, longestString);
//     return longestString;
//   }

//   function helper(s, k) {
//     let l = 0;
//     let r = 0;
//     let char = '';
//     let length = 0;
//     let kIndexes = [];

//     while (r < s.length) {
//       char = s[l];
//       length = Math.max(r - l, length);

//       if (k === 0 && s[r] !== char) {
//         while (kIndexes[0] + 1 === kIndexes[1]) {
//           kIndexes.shift();
//         }
//         l = kIndexes.shift() + 1;
//         k++;
//       } else if (k > 0 && s[r] !== char) {
//         kIndexes.push(r);
//         k--;
//       }
//       r++;
//     }

//     length = Math.max(r - l, length);
//     return length;
//   }

//   let x = helper(s, k);

//   return Math.min(x, maxLength);
// };

// var characterReplacement = function (s, k) {
//   let maxLength = s.length;

//   function helper(s, k) {
//     let max = 0;

//     let ogK = k;
//     for (let i = 0; i < s.length - max; i++) {
//       for (let j = i; j < s.length; j++) {
//         max = Math.max(max, j - i);
//         if (k === 0 && s[j] !== s[i]) {
//           k = ogK;
//           break;
//         } else if (s[j] !== s[i]) {
//           k--;
//         }
//       }
//     }

//     return max;
//   }

//   return Math.min(helper('?}]|><' + s + '!{[+=-', k), maxLength);
// };

var characterReplacement = function (s, k) {
  var map = {};
  let largestCount = 0;
  let l = 0;
  let maxLength = 0;

  for (let r = 0; r < s.length; r++) {
    const c = s[r];
    map[c] = map[c] ? map[c] + 1 : 1;
    largestCount = Math.max(largestCount, map[c]);
    if (r - l + 1 - largestCount > k) {
      map[s[l]]--;
      l++;
    }
    maxLength = Math.max(maxLength, r - l + 1);
  }

  return maxLength;
};
