//Algo O(!) Space / O(N²) Time
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
  }
  return array;
}

function swap(j, jminus, arr) {
  let temp = arr[j];
  arr[j] = arr[jminus];
  arr[jminus] = temp;
}
