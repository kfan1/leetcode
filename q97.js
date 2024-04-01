/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s3.length !== s1.length + s2.length) return false;

  let twoDArray = new Array();
  for (let i = 0; i <= s1.length; i++) twoDArray.push(new Array(s2.length + 1).fill(false));

  twoDArray[0][0] = true;

  for (let i = 1; i <= s1.length; i++) {
    if (s1[i - 1] === s3[i - 1]) twoDArray[i][0] = true;
    else break;
  }

  for (let i = 1; i <= s2.length; i++) {
    if (s2[i - 1] === s3[i - 1]) twoDArray[0][i] = true;
    else break;
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      twoDArray[i][j] =
        (twoDArray[i][j - 1] && s2[j - 1] === s3[i + j - 1]) || (twoDArray[i - 1][j] && s1[i - 1] === s3[i + j - 1]);
    }
  }

  return twoDArray[s1.length][s2.length];
};
