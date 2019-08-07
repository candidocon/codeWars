var whatTimeIsIt = function(angle) {
  let hours = Math.floor(angle / 30) === 0 ? 12 : Math.floor(angle / 30);
  let miuntes = Math.floor((angle % 30) * 2);
  return `${hours.toString().padStart(2, "0")}:${miuntes
    .toString()
    .padStart(2, "0")}`;
};
