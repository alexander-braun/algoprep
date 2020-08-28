/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let hash = {};
  for (const char of s) {
    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }

  for (const char of t) {
    if (hash[char]) {
      hash[char]--;
    } else return false;
  }
  const nums = Object.values(hash);
  for (const value of nums) {
    if (value !== 0) return false;
  }
  return true;
};
