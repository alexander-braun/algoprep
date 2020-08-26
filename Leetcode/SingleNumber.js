/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const hash = {};
  for (const el of nums) {
    if (hash[el]) {
      hash[el]++;
    } else {
      hash[el] = 1;
    }
  }
  for (el in hash) {
    if (hash[el] === 1) {
      return el;
    }
  }
};
