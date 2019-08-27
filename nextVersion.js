//https://www.codewars.com/kata/next-version/train/javascript

function nextVersion(version) {
  let newVersion = version.split(".");
}

console.log(nextVersion("1.2.3")); // , "1.2.4")
console.log(nextVersion("0.9.9")); //,"1.0.0")
console.log(nextVersion("1")); //,"2")
console.log(nextVersion("1.2.3.4.5.6.7.8")); //,"1.2.3.4.5.6.7.9")
console.log(nextVersion("9.9")); //,"10.0")
