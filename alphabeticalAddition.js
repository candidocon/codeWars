//https://www.codewars.com/kata/alphabetical-addition/train/javascript
//Alphabetical addition

function addLetters(...letters) {
  //if the input is empty
  if (letters.length === 0) {
    return "z";
  }
  let lettersStrng = letters.join("");
  let addition = 0;
  for (let i = 0; i < letters.length; i++) {
    addition += lettersStrng.charCodeAt(i) - 96;
    if (addition > 26) {
      addition -= 26;
      //addition ...
    }
  }
  return String.fromCharCode(addition + 96);
}

function addLetters(...letters) {
  return String.fromCharCode(
    ((letters.reduce((a, b) => a + b.charCodeAt(0) - 96, 0) + 25) % 26) + 97
  );
}
s;
