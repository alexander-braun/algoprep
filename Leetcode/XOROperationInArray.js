/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(start + 2 * i);
  }

  let result = nums[0];
  for (let i = 1; i < n; i++) {
    result = result ^ nums[i];
  }

  return result;
};
