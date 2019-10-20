//https://www.codewars.com/kata/pyramid-array/train/javascript
//Pyramid Array

function pyramid(n) {
  // your code here
  let response = [];
  for (let i = 1; i <= n; i++) {
    let inner = [];
    for (let j = 1; j <= i; j++) {
      inner.push(1);
    }
    response.push(inner);
  }
  return response;
}
