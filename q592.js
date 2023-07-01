/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  const num = [];
  const den = [];
  const signs = [];
  let set = new Set(['-', '+']);
  let curr = '';
  if (expression[0] === '-') {
    curr = '-';
    expression = expression.slice(1);
  }

  while (expression.length) {
    if (set.has(expression[0])) {
      den.push(curr);
      curr = '';
      signs.push(expression[0]);
      expression = expression.slice(1);
    }
    if (expression[0] === '/') {
      num.push(curr);
      curr = '';
      expression = expression.slice(1);
    }

    curr += expression[0];
    expression = expression.slice(1);
  }
  den.push(curr);

  let multiply = 1;
  multiply = den.reduce((acc, curr) => acc * Number(curr));

  for (let i = 0; i < num.length; i++) {
    num[i] = (Number(num[i]) * multiply) / Number(den[i]);
  }

  let acc = num[0];
  for (let i = 1; i < num.length; i++) {
    if (signs[i - 1] === '+') acc += num[i];
    else acc -= num[i];
  }

  let gcf = 1;
  if (acc === 0) gcf = multiply;

  for (let i = 1; i <= Math.min(Math.abs(acc), multiply); i++) {
    if (acc % i === 0 && multiply % i === 0) gcf = i;
  }

  return `${acc / gcf}/${multiply / gcf}`;
};
