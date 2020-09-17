/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums = nums.sort((a, b) => a - b).reverse();

  let cleanNums = [];
  let lastNum;
  for (const num of nums) {
    if (num !== lastNum) {
      cleanNums.push(num);
      lastNum = num;
    }
  }

  if (cleanNums.length < 3) {
    return cleanNums[0];
  } else {
    return cleanNums[2];
  }
};
