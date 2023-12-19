/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  // if s length is less than or equal 10, return empty array
  if (s.length <= 10) return [];

  // go through the entire string, creating each 10-length substring and add it to a set
  // if substring already exists in the set, add to result array
  const substringSet = new Set();
  const resSet = new Set();

  for (let i = 0; i <= s.length - 10; i++) {
    let substring = s.slice(i, i + 10);
    if (substringSet.has(substring)) {
      resSet.add(substring);
    } else {
      substringSet.add(substring);
    }
  }

  return Array.from(resSet);
};

