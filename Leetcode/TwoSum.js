/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let missing = target - nums[i];
    if (hash[missing] !== undefined) {
      return [hash[missing], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};
