/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const nums = [];
  for (let i = left; i <= right; i++) {
    const num = String(i).split('');
    let valid = true;
    for (char of num) {
      if (i % char !== 0 || char === 0) {
        valid = false;
      }
    }

    if (valid) nums.push(i);
  }
  return nums;
};
