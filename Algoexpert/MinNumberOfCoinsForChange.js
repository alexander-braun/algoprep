//Algo
function minNumberOfCoinsForChange(n, denoms) {
  let ways = Array(n + 1).fill(Infinity);
  ways[0] = 0;
  for (let i = 0; i < denoms.length; i++) {
    for (let j = 0; j < ways.length; j++) {
      if (denoms[i] <= j) {
        ways[j] = Math.min(ways[j], ways[j - denoms[i]] + 1);
      }
    }
  }

  return ways[n] !== Infinity ? ways[n] : -1;
}
