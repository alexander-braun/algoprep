//Caesar
function caesar(string, num) {
  num = num % 26;
  let lowercase = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let result = '';

  for (let i = 0; i < lowercase.length; i++) {
    let current = lowercase[i];
    let index = alphabet.indexOf(current);
    if (index === -1) result += current;
    else {
      let newIndex = index + num;
      if (newIndex >= alphabet.length) newIndex = newIndex - alphabet.length;
      if (newIndex < 0) newIndex = 26 + newIndex;
      let newChar = alphabet[newIndex];
      if (string[i] === string[i].toUpperCase())
        result += newChar.toUpperCase();
      else result += newChar;
    }
  }

  return result;
}
console.log(caesar('Javascript', -900));
