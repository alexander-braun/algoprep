/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentHighest = -Infinity;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > currentHighest) {
        currentHighest = arr[j];
      }
    }
    arr[i] = currentHighest;
  }
  arr[arr.length - 1] = -1;
  return arr;
};
