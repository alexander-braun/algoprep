//Binary Search
function binarySearch(arr, key) {
  let middle = Math.floor(arr.length / 2);
  let middleEl = arr[middle];

  if (middleEl === key) return true;
  else if (middleEl < key && arr.length > 1) {
    return binarySearch(arr.splice(middle, arr.length), key);
  } else if (middleEl > key && arr.length > 1) {
    return binarySearch(arr.splice(0, middle), key);
  } else return false;
}
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 0));
