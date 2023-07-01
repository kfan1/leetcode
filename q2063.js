/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function (word) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let substrings = [];
  let totalVowels = 0;

  // for(let i=0; i<word.length; i++) {
  //   let substring = word[i]
  //   substrings.push(substring)
  //   for(let j=i+1; j<word.length; j++) {
  //     substring+=word[j]
  //     substrings.push(substring)
  //   }
  // }

  // substrings = substrings.join()
  // for(let i=0; i<substrings.length; i++) {
  //   if(vowels.has(substrings[i])) totalVowels++
  // }
  for (let i = 0; i < word.length; i++) {
    if (vowels.has(word[i])) {
      totalVowels += (i + 1) * (word.length - i);
    }
  }
  return totalVowels;
};

/**
 * Jimmy's attempt
 * The position of a vowel contributes the total two ways:
 * 1. As the start of a substring. 'bac' // a contributes to the result twice in this example. 'a' and 'ac'
 *  a. (length of word - current position of vowel)
 * 2. As a part of the substring. 'bac' // a contributes to the result twice in this example. 'ba' and 'bac'
 *  b. (length of word - current position of vowel) * multiplied by the amount of letters preceding it
 */

const w = 'bac';

var countVowels = function (word) {
  let result = 0;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  if (!word) return result;

  for (let i = 0; i < word.length; i++) {
    if (vowels.has(word[i])) {
      result += (i + 1) * (word.length - i);
    }
  }

  return result;
};

console.log(countVowels('aa'));
