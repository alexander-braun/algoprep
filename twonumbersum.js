//Only max one pair will fit as a sum (algoexpert)
function twoNumberSum(array, targetSum) {
  let pairs = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum && array[i] !== array[j]) {
        return [array[i], array[j]];
      }
    }
  }

  return pairs;
}

// Solution 2 -> with hash
function twoNumberSum(array, targetSum) {
  let pairs = [];
  let hash = [];
  for (const element of array) {
    let targetVal = targetSum - element;
    if (hash.indexOf(targetVal) !== -1) {
      return [targetVal, element];
    } else {
      hash.push(element);
    }
  }

  return pairs;
}
