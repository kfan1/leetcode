/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let i = 0;
  while (i < tokens.length) {
    if (tokens[i] === '+') {
      tokens[i - 2] = Number(tokens[i - 2]) + Number(tokens[i - 1]);
      tokens.splice(i - 1, 2);
      i = i - 2;
    }
    if (tokens[i] === '-') {
      tokens[i - 2] = Number(tokens[i - 2]) - Number(tokens[i - 1]);
      tokens.splice(i - 1, 2);
      i = i - 2;
    }
    if (tokens[i] === '*') {
      tokens[i - 2] = Number(tokens[i - 2]) * Number(tokens[i - 1]);
      tokens.splice(i - 1, 2);
      i = i - 2;
    }
    if (tokens[i] === '/') {
      tokens[i - 2] = Number(tokens[i - 2]) / Number(tokens[i - 1]);
      tokens[i - 2] = tokens[i - 2] - (tokens[i - 2] % 1);
      tokens.splice(i - 1, 2);
      i = i - 2;
    }
    i++;
  }
  return tokens[0];
};

console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
