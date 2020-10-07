/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i * 2 - n + 1;
  }

  return arr;
};
