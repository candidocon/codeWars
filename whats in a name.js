//https://www.codewars.com/kata/whats-in-a-name/train/javascript

function nameInStr(str, name) {
  let newStr = str.toLowerCase();
  let newname = name.toLowerCase();
  let nameCounter = 0;
  let possibleString = [];
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === newname[nameCounter]) {
      possibleString.push(newStr[i]);
      nameCounter++;
    }
  }
  return possibleString.join("") === newname;
}
console.log(nameInStr("Across the rivers", "chris")); //, true)
console.log(nameInStr("Next to a lake", "chris")); // false)
console.log(nameInStr("Under a sea", "chris")); // false)
console.log(nameInStr("A crew that boards the ship", "chris")); // false)
console.log(nameInStr("A live son", "Allison")); // false)
