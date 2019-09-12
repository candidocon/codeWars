//Valid Parentheses
//https://www.codewars.com/kata/valid-parentheses/train/javascript

function validParentheses(parens) {
  let newParens = [];
  newParens.push(parens[0]);

  for (let i = 1; i < parens.length; i++) {
    if (parens[i] === ")") {
      if (newParens[newParens.length - 1] === "(") {
        newParens.pop();
      } else {
        return false;
      }
    }
    newParens.push(parens[i]);
  }
  return newParens.length === 0 ? true : false;
}
