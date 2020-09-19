/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (test(s.slice(i, j + 1))) {
        count++;
      }
    }
  }
  return count;
};

const test = (s) => {
  return s.split('').reverse().join('') === s ? true : false;
};
