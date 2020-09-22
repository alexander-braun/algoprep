/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const x = [];
  for (let i = 0; i < n; i++) {
    x.push(nums[i]);
  }

  const y = [];
  for (let i = n; i < nums.length; i++) {
    y.push(nums[i]);
  }

  const out = [];
  for (let i = 0; i < x.length; i++) {
    out.push(x[i], y[i]);
  }

  return out;
};
