/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let Arr = [];
  for (const el of A) {
    if (el % 2 === 0) {
      Arr.unshift(el);
    } else {
      Arr.push(el);
    }
  }
  return Arr;
};
