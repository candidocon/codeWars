//compute cube as sums
//https://www.codewars.com/kata/58af1bb7ac7e31b192000020

//!N consecutive not 3 consecutive!
//given n (where n >= 1) find n consecutive odd numbers whose sum is exactly the cube of n
function findSummands(n) {
  let cube = n * n * n;
  for (let i = 0; i < cube; i++) {
    if (i + (i + 2) + (i + 4) === cube) {
      return [i, i + 2, i + 4];
    }
  }
  return [1];
}

console.log(findSummands(3)); // should [7,9,11]
// because 7 + 9 + 11 = 27, the cube of 3. Note that there are only n = 3 elements in the array.
