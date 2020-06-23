//First own approach O(1) Space / O(N²)
function selectionSort(array) {
  let smallestIdx;
  for (let i = 0; i < array.length; i++) {
    smallestIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i] && array[smallestIdx] > array[j]) {
        smallestIdx = j;
      }
      if (j === array.length - 1 && smallestIdx !== i) {
        let temp = array[i];
        array[i] = array[smallestIdx];
        array[smallestIdx] = temp;
      }
    }
  }
  return array;
}

//Algo solution
function selectionSort(array) {
  let currentIdx = 0;
  let smallestIdx;
  while (currentIdx < array.length - 1) {
    smallestIdx = currentIdx;
    for (let i = currentIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) {
        smallestIdx = i;
      }
    }
    swap(currentIdx, smallestIdx, array);
    currentIdx++;
  }
  return array;
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
