// Naive first
function isValidSubsequence(array, sequence) {
  let currentIndex = -1;
  let hash = {};
  for (const element of array) {
    if (hash[element]) hash[element]++;
    else hash[element] = 1;
  }

  for (let i = 0; i < sequence.length; i++) {
    let tempIndex = array.indexOf(sequence[i]);
    if (tempIndex < 0) return false;
    else if (hash[sequence[i]] < 1) return false;
    if (tempIndex > currentIndex) currentIndex = tempIndex;
    else if (sequence[i] === sequence[i - 1]) {
      currentIndex = tempIndex++;
      hash[sequence[i]]--;
    } else if (tempIndex < currentIndex) return false;
    hash[sequence[i]]--;
  }

  return true;
}

// Naive second
function isValidSubsequence(array, sequence) {
  let val1 = sequence[0];
  while (array.indexOf(val1) > 0 || val1 === array[0]) {
    if (val1 === array[0]) {
      sequence.shift();
      val1 = sequence[0];
    }

    if (sequence.length === 0) {
      return true;
    }

    array.shift();
  }
  return false;
}
