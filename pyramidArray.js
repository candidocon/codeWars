//https://www.codewars.com/kata/pyramid-array/train/javascript
//Pyramid Array

//attempt 1
//Time: 1246ms
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
//
//Time: 1247ms
function pyramid(n) {
  // your code here
  let response = [];
  for (let i = 1; i <= n; i++) {
    let inner = new Array(i);
    inner.fill(1);
    response.push(inner);
  }
  return response;
}
//Time: 1196ms
function pyramid(n) {
  // your code here
  let response = [];

  for (let i = 1; i <= n; i++) {
    let inner = new Array(i);
    inner.fill(1);
    response.push(inner);
  }
  return response;
}

//Time: 1147ms
function pyramid(n) {
  // your code here
  let response = [];
  let inner = [1];

  for (let i = 0; i < n; i++) {
    response.push(inner.slice());
    inner.push(1);
  }
  return response;
}

//most clever answer
function pyramid(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push([...Array(i + 1)].fill(1));
  }
  return res;
}
