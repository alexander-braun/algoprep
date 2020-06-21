//Bubblesort 2
function bubbleSortOpt(arr) {
  let steps = 0;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    steps++;
  }

  console.log(steps);
  return arr;
}
console.log(
  bubbleSortOpt([5, 3, 8, 2, 1, 4, 5, 3, 8, 2, 1, 4, 5, 3, 8, 2, 1, 4, 0, -10])
);
