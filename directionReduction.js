function dirReduc(arr) {
  let change = false;
  do {
    change = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "NORTH") {
        if (arr[i + 1] === "SOUTH") {
          arr.splice(i, 2);
          i--;
          change = true;
        }
      }
    }
  } while (change);
  return arr;
}
