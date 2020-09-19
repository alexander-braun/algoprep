/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    let hash = {};
    for (let j = i; j < s.length; j++) {
      if (hash[s[j]]) {
        break;
      } else if (!hash[s[j]]) {
        hash[s[j]] = true;
      }
    }

    let length = Object.keys(hash).length;
    if (length > maxLength) {
      maxLength = length;
    }
    hash = {};
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring('jbpnbwwd'));
//node LongestSubstringNoRepeating
