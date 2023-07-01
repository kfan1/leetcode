/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(' ');
};

// two pointer
// var reverseWords = function (s) {
//   let res = '';
//   s = s.trim().split(' ').reverse().join(' ');
//   let lp = 0;
//   let rp = 0;

//   while (rp < s.length) {
//     if (/[a-zA-Z0-9]/.test(s[lp])) {
//       if (/[a-zA-Z0-9]/.test(s[rp])) {
//         rp++;
//       } else {
//         res = res + s.slice(lp, rp) + ' ';
//         lp = rp;
//       }
//     } else {
//       lp++;
//       rp++;
//     }
//   }

//   res = res + s.slice(lp, rp);

//   return res;
// };
