function persistence(num) {
  let counter = 0;
  while (num > 9) {
    let separateDigits = num.toString().split("");
    num = 1;
    separateDigits.forEach(eachDigit => {
      num *= eachDigit;
    });
  }
  return counter;
}
