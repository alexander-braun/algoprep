/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let numbers = String(n)
    .split('')
    .map((num) => Number(num));
  return numbers.reduce((a, b) => a * b) - numbers.reduce((a, b) => a + b);
};
