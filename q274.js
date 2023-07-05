// /**
//  * @param {number[]} citations
//  * @return {number}
//  */
// var hIndex = function (citations) {
//   for (let i = 1; i <= citations.length; i++) {
//     let tracker = i;
//     for (let j = 0; j < citations.length; j++) {
//       if (citations[j] >= i) tracker--;
//     }
//     if (tracker > 0) return i - 1;
//   }
//   return citations.length;
// };

var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  while (i < citations.length) {
    if (i + 1 > citations[i]) return i;
    i++;
  }
  return i;
};
