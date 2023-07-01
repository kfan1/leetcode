/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */

var mergeSimilarItems = function (items1, items2) {
  const ret = [];

  for (let i = 0; i < items1.length; i++) {
    ret.push([items1[i][0], items1[i][1]]);
    for (let j = 0; j < items2.length; j++) {
      if (items2[j][0] === items1[i][0]) {
        ret[i][1] += items2[j][1];
        items2.splice(j, 1);
      }
    }
  }

  ret.push(...items2);

  ret.sort((a, b) => a[0] - b[0]);
  return ret;
};


/**
 * jimpulse
 */

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
  const cache = {}
  const output = []

  for (let i = 0; i < items1.length; i ++) {
      const [value, weight] = items1[i]

      if (!cache[value]) cache[value] = 0;
      cache[value] += weight
  }

  for (let i = 0; i < items2.length; i++) {
      const [value, weight] = items2[i]

      if (!cache[value]) cache[value] = 0;
      cache[value] += weight
  }

  const values = Object.keys(cache)

  for (let i = 0; i < values.length; i++) {
      const value = values[i]
      output.push([value, cache[value]])
  }

  output.sort((a, b) => {
      return a[0] - b[0]
  })

  return output
};