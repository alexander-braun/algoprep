/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums = nums.sort((a, b) => a - b, 0);
  let runningSum = nums.reduce((a, b) => a + b, 0);
  let tempSum = 0;
  const numsArr = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    runningSum -= nums[i];
    tempSum += nums[i];
    numsArr.push(nums[i]);
    if (runningSum < tempSum) {
      return numsArr;
    }
  }
};
