//Only max one pair will fit as a sum (algoexpert)
//O(n²)
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }

  return [];
}

// Solution 2 -> with hash
//O(n)
function twoNumberSum(array, targetSum) {
  let hash = [];
  for (const element of array) {
    let targetVal = targetSum - element;
    if (hash.indexOf(targetVal) !== -1) {
      return [targetVal, element];
    } else {
      hash.push(element);
    }
  }

  return [];
}

// Solution 3 -> pointers
// O(nlog(n))
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) return [array[left], array[right]];
    else if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    }
  }

  return [];
}
