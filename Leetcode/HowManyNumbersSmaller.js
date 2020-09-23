/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let sorted = [...nums].sort((a, b) => a - b);
  let result = [];
  for (num of nums) {
    result.push(sorted.indexOf(num));
  }
  return result;
};
