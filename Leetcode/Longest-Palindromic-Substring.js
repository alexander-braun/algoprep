// Bit slow, own implementation

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // Special case
  if (s.length === 1) return s;

  let longest = '';
  let sL = s.length;

  // Loop through whole string
  for (let i = 1; i <= s.length; i++) {
    if (longest.length >= s.length) return longest;

    let p1 = i - 1;
    let p2 = i + 1;
    let currentLongest = '';

    while (p2 <= sL) {
      if (s[p1] === s[p2]) {
        let str = s.slice(p1, p2 + 1);
        let strL = str.length;

        if (strL > currentLongest.length && isPalindrome(str)) {
          currentLongest = str;
        }
        if ((p1 < 0 && p2 > sL) || p2 > sL) {
          break;
        }
        if (p1 > 0) {
          p1--;
        }
        if (p2 <= sL) {
          p2++;
        }
      } else if (s[p1] === s[i]) {
        let str = s.slice(p1, i + 1);
        let strL = str.length;

        if (strL > currentLongest.length && isPalindrome(str)) {
          currentLongest = str;
          p1--;
        } else {
          break;
        }
      } else if (s[i] === s[p2]) {
        let str = s.slice(i, p2 + 1);
        let strL = str.length;
        if (strL > currentLongest.length && isPalindrome(str)) {
          currentLongest = str;
          p2++;
        } else {
          break;
        }
      } else {
        if (
          s.slice(p1, i).length > currentLongest.length &&
          isPalindrome(s.slice(p1, i))
        ) {
          currentLongest = s.slice(p1, i);
        }
        break;
      }
    }

    if (longest.length < currentLongest.length) {
      longest = currentLongest;
    }
  }

  return longest;
};

const isPalindrome = (string) => {
  return string.split('').reverse().join('') === string;
};
