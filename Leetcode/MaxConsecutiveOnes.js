/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let sum = 0;
  let current = false;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (current === false) {
        current = true;
      }
      temp++;
    } else if (nums[i] === 0) {
      if (current === true) {
        sum = temp > sum ? temp : sum;
        temp = 0;
        current = false;
      }
    }
    if (i === nums.length - 1) {
      sum = temp > sum ? temp : sum;
    }
  }
  return sum;
};
