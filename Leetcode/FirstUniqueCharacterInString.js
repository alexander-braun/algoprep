/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hash = {};
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hash) {
      hash[s[i]] = false;
    } else {
      hash[s[i]] = true;
    }
  }
  for (const elem of Object.keys(hash)) {
    if (hash[elem] === true) return s.indexOf(elem);
  }
  return -1;
};
