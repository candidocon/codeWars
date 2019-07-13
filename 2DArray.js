function namesSorter(departmentsArray) {
  let flatArr = [].concat(...departmentsArray);
  return flatArr.sort((a, b) => {
    if (a.length === b.length) {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    }
  });
}
