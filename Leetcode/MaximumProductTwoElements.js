/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let n1 = 0,
    n2 = 0;
  for (const num of nums) {
    if (num >= n1) {
      n2 = n1;
      n1 = num;
    } else if (num > n2) {
      n2 = num;
    }
  }

  return (n1 - 1) * (n2 - 1);
};
