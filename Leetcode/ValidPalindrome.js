/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  const cleanString = s.match(/[A-Za-z0-9]/g);
  if (!cleanString) return true;

  let p1 = 0;
  let p2 = cleanString.length - 1;

  while (p1 < p2) {
    if (cleanString[p1] !== cleanString[p2]) {
      return false;
    }
    p1++;
    p2--;
  }

  return true;
};
