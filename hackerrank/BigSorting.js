// Complete the bigSorting function below.
function bigSorting(unsorted) {
  return unsorted.sort((a, b) => {
    if (a.length === b.length) {
      return a > b ? 1 : -1;
    } else {
      return a.length - b.length;
    }
  });
}
