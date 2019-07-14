function namesSorter(departmentsArray) {
  let flatArr = [...departmentsArra];
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
