/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let brackets = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  for (const el of s) {
    if (el in brackets) {
      stack.push(brackets[el]);
    } else {
      let bracket = stack.pop();
      if (el !== bracket) return false;
    }
  }
  if (stack.length) return false;
  return true;
};
