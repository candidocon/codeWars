//My solution
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

//solution best practice 1
function dirReduc(plan) {
  var opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST"
  };
  return plan.reduce(function(dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}

//solution most clever.
function dirReduc(arr) {
  var str = arr.join(""),
    pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, "");
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
