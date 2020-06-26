// Version 1
function mergeSort(array) {
  if (array.length === 1) return array;
  let middleIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, middleIdx);
  let rightHalf = array.slice(middleIdx);
  return mergeAndSortArrays(mergeSort(leftHalf), mergeSort(rightHalf));
}

function mergeAndSortArrays(leftHalf, rightHalf) {
  let sortedArray = new Array(leftHalf.length + rightHalf.length).fill(0);
  let k = 0,
    i = 0,
    j = 0;
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] <= rightHalf[j]) {
      sortedArray[k] = leftHalf[i];
      i++;
    } else {
      sortedArray[k] = rightHalf[j];
      j++;
    }
    k++;
  }

  while (i < leftHalf.length) {
    sortedArray[k] = leftHalf[i];
    i++;
    k++;
  }

  while (j < rightHalf.length) {
    sortedArray[k] = rightHalf[j];
    j++;
    k++;
  }

  return sortedArray;
}

//Version 2 - Better version
function mergeSort(array) {
  if (array.length <= 1) return array;
  let auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray);
  return array;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray) {
  if (startIdx === endIdx) {
    return;
  }

  let middleIdx = Math.floor((startIdx + endIdx) / 2);

  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);

  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray) {
  let k = startIdx,
    i = startIdx,
    j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      mainArray[k] = auxiliaryArray[i];
      i++;
    } else {
      mainArray[k] = auxiliaryArray[j];
      j++;
    }
    k++;
  }

  while (i <= middleIdx) {
    mainArray[k] = auxiliaryArray[i];
    i++;
    k++;
  }

  while (j <= endIdx) {
    mainArray[k] = auxiliaryArray[j];
    j++;
    k++;
  }
}

console.log(mergeSort([2, 1, 3, 1, 2]));
console.log(count);

/**
 * Mergesort divides an array by two and sorts the two halves .. then takes two halves of those halves and so on
 *
 *
 *
 *  0  1  2  3  4  5  6
 * [8, 5, 2, 9, 5, 6, 3]
 *
 * index 0 + index 6 / 2 = middle array = 3
 *
 * [8, 5, 2, 9] [5, 6, 3]
 * Recursivly call mergesort on both array
 *
 * [8, 5] [2, 9]
 * [8] [5]  -> compare two subarrays
 * [5, 8] [2] [9]
 * [5, 8] [2, 9] -> compare each first character with pointers
 *  P1     P2
 * [5, 8] [2, 9]   -> [2]
 *  P1        P2
 * [5, 8] [2, 9]   -> [2, 5]
 *     P1     P2
 * [5, 8] [2, 9]   -> [2, 5, 8]
 *     P1     P2
 * [5, 8] [2, 9]    -> [2, 5, 8, 9]
 *
 * [2, 5, 8, 9] [5, 6, 3]
 * [2, 5, 8, 9] [5, 6] [3]
 * [2, 5, 8, 9] [5] [6] [3]
 * [2, 5, 8, 9] [5, 6] [3]
 * [2, 5, 8, 9] [3, 5, 6]
 *
 *
 */
