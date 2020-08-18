// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  const sticks = [];
  let current = sortedArr[0];
  while (sortedArr.length) {
    sticks.push(sortedArr.length);
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] === current) {
        sortedArr.splice(i, 1);
        i--;
      } else {
        sortedArr[i] -= current;
      }
    }
    current = sortedArr[0];
  }
  return sticks;
}
