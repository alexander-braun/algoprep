/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr = arr.sort((a, b) => a - b, 0);
  let minimumDistance = Infinity;

  let minimumPairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) < minimumDistance) {
        minimumDistance = Math.abs(arr[i] - arr[j]);
        minimumPairs = [[arr[i], arr[j]]];
      } else if (Math.abs(arr[i] - arr[j]) === minimumDistance) {
        minimumPairs.push([arr[i], arr[j]]);
      }

      if (Math.abs(arr[i] - arr[j]) > minimumDistance) {
        break;
      }
    }
  }
  return minimumPairs;
};
