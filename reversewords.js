//Reverse words
function reverseWords(str) {
  let wordsArr = str.split(' ');
  let words = [];

  wordsArr.forEach((word) => {
    let reversed = [];
    word.split('').forEach((letter) => {
      reversed.unshift(letter);
    });
    words.push(reversed.join(''));
    reversed = [];
  });

  return words.join(' ');
}
console.log(reverseWords('this is a string of words'));
