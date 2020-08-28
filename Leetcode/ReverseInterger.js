/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let pre = x < 0 ? -1 : 1;
  x = Math.abs(x);
  str = String(x);
  x = Number(str.split('').reverse().join(''));
  return x > 2147483648 ? 0 : pre * x;
};
