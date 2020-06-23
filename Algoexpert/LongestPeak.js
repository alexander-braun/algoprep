//Own 21min
function longestPeak(array) {
  let peaks = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i] && array[i + 1] < array[i]) {
      peaks.push(i);
    }
  }

  let currentLongest = 0;
  for (const peak of peaks) {
    let streak = 3;
    let i = 2;
    let j = 1;

    while (array[peak - i] < array[peak - j]) {
      i++;
      j++;
      streak++;
    }

    i = 2;
    j = 1;
    while (array[peak + i] < array[peak + j]) {
      i++;
      j++;
      streak++;
    }

    if (streak > currentLongest) {
      currentLongest = streak;
    }
  }

  return currentLongest;
}

//AlgoSolution
function longestPeak(array) {
  let longestPeakLength = 0;
  let i = 1;
  while (i < array.length - 1) {
    let isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
    if (!isPeak) {
      i++;
      continue;
    }

    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx -= 1;
    }

    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }

    let currentPeakLength = rightIdx - leftIdx - 1;

    if (currentPeakLength > longestPeakLength) {
      longestPeakLength = currentPeakLength;
    }

    i = rightIdx;
  }
  return longestPeakLength;
}
