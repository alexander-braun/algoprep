function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) return 0;
  else if (array.length === 1) return array[0];
  let maxSum = array.slice();
  maxSum[1] = Math.max(maxSum[0], maxSum[1]);
  for (let i = 2; i < array.length; i++) {
    maxSum[i] = Math.max(maxSum[i - 1], maxSum[i - 2] + maxSum[i]);
  }

  return maxSum[maxSum.length - 1];
}
