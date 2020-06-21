//Palindrome
function isPalindrome(string) {
  string = string.toLowerCase();
  const characters = string.split('');
  const valid = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const letters = [];
  characters.forEach((char) => {
    if (valid.indexOf(char) !== -1) letters.push(char);
  });

  if (letters.join('') === letters.reverse().join('')) return true;
  return false;
}
console.log(isPalindrome("Madam I'm Adam"));
