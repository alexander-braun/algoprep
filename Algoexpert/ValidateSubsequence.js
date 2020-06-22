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

// Naive second 7min
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

// Algosolution O(n)
function isValidSubsequence(array, sequence) {
  arrIdx = 0;
  seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx += 1;
    }
    arrIdx += 1;
  }

  return seqIdx === sequence.length;
}

// Algosolution O(n)
function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (const val of array) {
    if (seqIdx === sequence.length) return true;
    if (sequence[seqIdx] === val) {
      seqIdx += 1;
    }
  }

  return seqIdx === sequence.length;
}
