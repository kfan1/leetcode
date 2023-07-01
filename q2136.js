/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function (plantTime, growTime) {
  let combo = [];
  for (let i = 0; i < plantTime.length; i++) {
    combo.push([plantTime[i], growTime[i]]);
  }
  combo.sort((a, b) => b[1] - a[1]);

  let days = 0;
  let currDay = 0;

  for (let i = 0; i < combo.length; i++) {
    days = Math.max(combo[i][0] + combo[i][1] + currDay, days);
    currDay = combo[i][0] + currDay;
  }

  return days;
};

