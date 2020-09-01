/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];
  let index = 1;
  let string = strs[0][0];

  while (index <= strs[0].length) {
    for (const word of strs) {
      if (word.slice(0, index) !== string) {
        if (string.length === 1) {
          return '';
        }
        return string.slice(0, index - 1);
      }
    }
    string = strs[0].slice(0, index + 1);
    index++;
  }
  return string !== undefined ? string : '';
};
