//https://www.codewars.com/kata/alphabetical-addition/train/javascript
//Alphabetical addition

function addLetters(...letters) {
  if (letters.length === 0) {
    return "z";
  }
  let addition = 0;
  for (let i = 0; i < letters.length; i++) {
    addition += letters.charCodeAt(i) - 96;
    if (addition > 26) {
      addition -= 26;
    }
  }
  return String.fromCharCode(addition + 96);
}
