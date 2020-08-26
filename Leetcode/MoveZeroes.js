/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeros = 0;
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      zeros++;
    }
  }
  while (zeros > 0) {
    nums.push(0);
    zeros--;
  }
  return nums;
};
