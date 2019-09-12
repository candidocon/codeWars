//Valid Parentheses
//https://www.codewars.com/kata/valid-parentheses/train/javascript

function validParentheses(parens) {
  if (parens.length === 0) {
    return true;
  }
  let newParens = [parens[0]];
  for (let i = 1; i < parens.length; i++) {
    if (parens[i] === ")") {
      if (newParens[newParens.length - 1] === "(") {
        newParens.pop();
      } else {
        return false;
      }
    } else {
      newParens.push(parens[i]);
    }
  }
  return newParens.length === 0 ? true : false;
}

//best Answer:

// I had something that was smaller and looked cooler, but
// this is how you'd want to write an actual parser.
function validParentheses(string) {
  var tokenizer = /[()]/g, // ignores characters in between; parentheses are
    count = 0, // pretty useless if they're not grouping *something*
    token;
  while (((token = tokenizer.exec(string)), token !== null)) {
    if (token == "(") {
      count++;
    } else if (token == ")") {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count == 0;
}
