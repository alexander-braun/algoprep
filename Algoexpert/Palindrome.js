//First own approach O(N) Time / O(1) Space
function isPalindrome(string) {
  let characters = string.split('');
  let left = 0;
  let right = characters.length - 1;

  while (left < right) {
    if (characters[left] !== characters[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

//Second own O(N²) Time / O(N) Space
function isPalindrome(string) {
  let newString = string.split('').reverse().join('');
  return string === newString;
}

//Algosolution O(N) Time Space
function isPalindrome(string, i = 0) {
  let j = string.length - 1 - i;
  if (i >= j) return true;
  else {
    return string[i] === string[j] && isPalindrome(string, i + 1);
  }
}

function missingNumber(arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = 0;
  }

  if (!(0 in hash)) return 0;

  for (let i = 0; i < arr.length + 1; i++) {
    if (!(i in hash)) return i;
  }
}
