/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const dpArray = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0));
  for (let i = 0; i <= word1.length; i++) {
    dpArray[i][0] = i;
  }
  for (let i = 0; i <= word2.length; i++) {
    dpArray[0][i] = i;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] !== word2[j - 1]) {
        dpArray[i][j] = Math.min(dpArray[i][j - 1] + 1, dpArray[i - 1][j] + 1, dpArray[i - 1][j - 1] + 1);
      } else {
        dpArray[i][j] = dpArray[i - 1][j - 1];
      }
    }
  }

  return dpArray[word1.length][word2.length];
};
