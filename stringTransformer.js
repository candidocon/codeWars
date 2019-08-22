//https://www.codewars.com/kata/string-transformer/train/javascript

function stringTransformer(str) {
  let transformedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      transformedStr += str[i].toUpperCase();
    } else {
      transformedStr += str[i].toLowerCase();
    }
  }
  return transformedStr
    .split(" ")
    .reverse()
    .join(" ");
}

console.log(stringTransformer("Example string")); // 'STRING eXAMPLE';

function stringTransformer(str) {
  return str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .map(v => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");
}
