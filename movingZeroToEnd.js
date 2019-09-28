//https://www.codewars.com/kata/moving-zeros-to-the-end
//Moving Zeros To The End

var moveZeros = function(arr) {
  let newArr = arr.filter(item => item !== 0);
  let numZeros = arr.length - newArr.length;
  for (let i = 0; i < numZeros; i++) {
    newArr.push(0);
  }
  return newArr;
};

//best solution
var moveZeros = function(arr) {
  return arr
    .filter(function(x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function(x) {
        return x === 0;
      })
    );
};
