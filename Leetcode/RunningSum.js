/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const running = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    running[i] = sum;
  }
  return running;
};
