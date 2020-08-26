/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hash = {};
  for (const el of nums) {
    if (hash[el]) {
      return true;
    } else {
      hash[el] = true;
    }
  }
  return false;
};
