/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  knowledge = new Map(knowledge);
  let temp = '';
  let res = '';
  let memorize = false;
  for (let i = 0; i < s.length; i++) {
    if (memorize) temp += s[i];
    if (s[i] === '(') memorize = true;

    if (!memorize) res += s[i];
    if (s[i] === ')') {
      temp = temp.slice(0, temp.length - 1);
      res += knowledge.get(temp) ? knowledge.get(temp) : '?';
      memorize = false;
      temp = '';
    }
  }
  return res;
};