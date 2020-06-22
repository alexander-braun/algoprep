function binarySearch(array, target) {
  return binaryHelper(array, target, 0, array.length - 1);
}

function binaryHelper(array, target, left, right) {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  const match = array[middle];
  if (match === target) return middle;
  else if (match > target) return binaryHelper(array, target, left, middle - 1);
  else if (match < target)
    return binaryHelper(array, target, middle + 1, right);
}
