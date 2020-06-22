//Bubblesort 1
function bubbleSort(arr) {
  let passes = 1;

  let sort = () => {
    for (let i = 0; i < arr.length - passes; i++) {
      let current = arr[i];
      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = current;
      }
    }
    passes++;
  };

  let test = () => {
    for (let i = 0; i < arr.length - passes; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
  };

  while (test() === false) {
    sort();
  }

  console.log(passes, arr.length - 1);
  return arr;
}
console.log(
  bubbleSort([5, 3, 8, 2, 1, 4, 5, 3, 8, 2, 1, 4, 5, 3, 8, 2, 1, 4, 0, -10])
);
