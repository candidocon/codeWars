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
}

var whatTimeIsIt = function(angle) {
  let hours = Math.floor(angle / 30) === 0 ? 12 : Math.floor(angle / 30);
  let miuntes = Math.floor((angle % 30) * 2);
  return `${hours.toString().padStart(2, "0")}:${miuntes
    .toString()
    .padStart(2, "0")}`;
};

function namesSorter(departmentsArray) {
  let flatArr = [].concat(...departmentsArray);
  return flatArr.sort((a, b) => {
    if (a.length === b.length) {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    } else {
      return a.length - b.length;
    }
  });
}

function namesSorter(departmentsArray) {
  let flatArr = [].concat(...departmentsArray);
  return flatArr.sort((a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    if (a.length === b.length) {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    }
  });
}

var arr = [
  ["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"],
  ["Michael", "Alexander", "Mikel", "Ariel"],
  ["John", "Julia", "Brad", "George"]
];
console.log(namesSorter(arr));

console.log(namesSorter([["Juan"], ["Brad"]]));
console.log(
  namesSorter([["Juan", "Ariel", "Julia"], ["Brad", "Michael", "Alexander"]])
);
console.log(
  namesSorter([
    ["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"],
    ["Michael", "Alexander", "Mikel", "Ariel"],
    ["John", "Julia", "Brad", "George"]
  ])
);
//, ['Brad', 'Juan']);
//, [ 'Brad','John','Josh','Juan','Ariel','Julia','Mikel','Pablo','George','Enrique','Gonzalo','Michael','Alexander' ])
