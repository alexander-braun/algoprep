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
