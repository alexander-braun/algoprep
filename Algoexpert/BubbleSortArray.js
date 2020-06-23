//First own Approach O(N²) Time / O(1) Space
function bubbleSort(array) {
  let unsorted = true;
  let changed = false;
  let i = 0;
  while (unsorted) {
    let nextElem = array[i + 1];
    if (array[i] > nextElem) {
      array[i + 1] = array[i];
      array[i] = nextElem;
      changed = true;
    }
    i++;
    if (i === array.length) {
      if (changed === false) {
        unsorted = false;
        return array;
      } else {
        i = 0;
        changed = false;
      }
    }
  }
}

//Algo solution O(N²) Time / O(1) Space
function bubbleSort(array) {
  let isSorted = false;
  let count = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - count; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        isSorted = false;
      }
    }
    count++;
  }
  return array;
}
