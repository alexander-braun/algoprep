/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let hash = {};
  for (const el of arr) {
    if (hash[el * 2]) {
      hash[el * 2]++;
    } else {
      hash[el * 2] = 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in hash && arr[i] !== 0) {
      return true;
    } else if (arr[i] === 0) {
      if (hash[arr[i]] > 1) {
        return true;
      }
    }
  }
  return false;
};
