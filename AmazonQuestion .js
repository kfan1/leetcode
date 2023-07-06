function getMaxFreqDeviation(s) {
  // Write your code here
  let sArr = [];
  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];
    let counter = 1;
    while (currChar === s[counter + i]) {
      counter++;
    }
    sArr.push([currChar, counter]);
    i += counter - 1;
  }

  let sObj = {};
  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] = sObj[s[i]] + 1 || 1;
  }

  let max = Math.max(...Object.values(sObj)) - Math.min(...Object.values(sObj));
  let lp = 0;
  let rp = sArr.length - 1;
  while (lp < rp) {
    if (sArr[lp][1] < sArr[rp][1]) {
      let diff = sArr[lp][1] - 1;
      sObj[sArr[lp][0]] -= diff;
      max = Math.max(Math.max(...Object.values(sObj)) - Math.min(...Object.values(sObj)), max);
      sObj[sArr[lp][0]] -= 1;
      if (sObj[sArr[lp][0]] === 0) delete sObj[sArr[lp][0]];
      lp++;
    } else {
      let diff = sArr[rp][1] - 1;
      sObj[sArr[rp][0]] -= diff;
      max = Math.max(Math.max(...Object.values(sObj)) - Math.min(...Object.values(sObj)), max);
      sObj[sArr[rp][0]] -= 1;
      if (sObj[sArr[rp][0]] === 0) delete sObj[sArr[rp][0]];
      rp--;
    }
  }

  sObj = {};
  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] = sObj[s[i]] + 1 || 1;
  }

  lp = 0;
  rp = sArr.length - 1;
  while (lp < rp) {
    if (sArr[lp][1] < sArr[rp][1]) {
      let diff = sArr[lp][1] - 1;
      sObj[sArr[lp][0]] -= diff;
      max = Math.max(Math.max(...Object.values(sObj)) - Math.min(...Object.values(sObj)), max);
      sObj[sArr[lp][0]] += diff;
      sObj[sArr[rp][0]] -= sArr[rp][1];
      if (sObj[sArr[rp][0]] === 0) delete sObj[sArr[rp][0]];
      rp--;
    } else {
      let diff = sArr[rp][1] - 1;
      sObj[sArr[rp][0]] -= diff;
      max = Math.max(Math.max(...Object.values(sObj)) - Math.min(...Object.values(sObj)), max);
      sObj[sArr[rp][0]] += diff;
      sObj[sArr[lp][0]] -= sArr[lp][1];
      if (sObj[sArr[lp][0]] === 0) delete sObj[sArr[lp][0]];
      lp++;
    }
  }

  return max;

  // for (let j = 0; j < s.length - 1; j++) {
  //   let sObj = {};
  //   sObj[s[j]] = 1;
  //   let subStrMax = sObj[s[j]];
  //   let subStrMin = sObj[s[j]];

  //   for (let i = j + 1; i < s.length; i++) {
  //     sObj[s[i]] = sObj[s[i]] + 1 || 1;
  //     subStrMax = Math.max(subStrMax, sObj[s[i]]);
  //     subStrMin = Math.min(...Object.values(sObj));
  //     max = Math.max(subStrMax - subStrMin, max);
  //   }
  // }
f
  // return max;
}

console.log(getMaxFreqDeviation('bbacccabab'));
console.log(getMaxFreqDeviation('abdbcdacbcadbbc'));
console.log(getMaxFreqDeviation('baccabcbc'));
console.log(getMaxFreqDeviation('acbbc'));
