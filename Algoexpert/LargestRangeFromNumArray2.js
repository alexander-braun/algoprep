//Find the largest Range from an array of number (algoexpert) algo solution transformed to js
function largestRange(array) {
  let bestRange = [];
  let longestLength = 0;
  let nums = {};

  for (let num of array) {
    nums[num] = true;
  }

  for (let num of array) {
    if (!nums[num]) {
      continue;
    }

    nums[num] = false;
    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;

    while (nums[left]) {
      nums[left] = false;
      currentLength++;
      left -= 1;
    }

    while (nums[right]) {
      nums[right] = false;
      currentLength++;
      right += 1;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }
  return bestRange;
}
