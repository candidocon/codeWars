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
      } else if (arr[i] === "SOUTH") {
        if (arr[i + 1] === "NORTH") {
          arr.splice(i, 2);
          i--;
          change = true;
        }
      } else if (arr[i] === "EAST") {
        if (arr[i + 1] === "WEST") {
          arr.splice(i, 2);
          i--;
          change = true;
        }
      } else if (arr[i] === "WEST") {
        if (arr[i + 1] === "EAST") {
          arr.splice(i, 2);
          i--;
          change = true;
        }
      }
    }
  } while (change);
  return arr;
}
