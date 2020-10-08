/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  let newString = new Array(n).fill('a');
  if (n % 2 === 0) {
    newString[newString.length - 1] = 'b';
    return newString.join('');
  } else {
    return newString.join('');
  }
};
