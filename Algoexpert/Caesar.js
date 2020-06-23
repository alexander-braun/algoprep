//First own solution
function caesarCipherEncryptor(string, key) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let index;
  let output = [];
  for (const char of string) {
    index = alphabet.indexOf(char) + (key % 26);
    if (index > 25) {
      index = Math.abs(26 - index);
    } else if (index < 0) {
      index = Math.abs(26 + index);
    }
    output.push(alphabet[index] || char);
  }
  return output.join('');
}

//AlgoSolution O(N) Time / O(N) Space
function caesarCipherEncryptor(string, key) {
  let newLetters = [];
  let newKey = key % 26;
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join('');
}

function getNewLetter(letter, key) {
  let newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
}
