function pairs(k, arr) {
  let sorted = arr.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j < arr.length) {
      let diff = sorted[j] - sorted[i];
      if (diff === k) {
        count++;
        j++;
      } else if (diff > k) {
        i++;
      } else if (diff < k) {
        j++;
      }
    }
  }
  return count;
}

console.log(pairs(2, [1, 5, 3, 4, 2])); // 3

// node PairsMakeDifferenceTarget.js
