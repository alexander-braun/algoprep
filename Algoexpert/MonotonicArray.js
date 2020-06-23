//First own O(N)
function isMonotonic(array) {
  let increasing = false;
  let decreasing = false;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      decreasing = true;
    } else if (array[i] > array[i - 1]) {
      increasing = true;
    }

    if (increasing && array[i] < array[i - 1]) {
      return false;
    } else if (decreasing && array[i] > array[i - 1]) {
      return false;
    }
  }

  return true;
}
