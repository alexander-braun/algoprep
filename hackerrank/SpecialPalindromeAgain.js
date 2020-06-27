function substrCount(n, s) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let currentEl = s[i];
    count++;

    // First while loop only checks with one pointer for exact same character strings
    let loop1Pointer = i + 1;
    while (loop1Pointer <= n) {
      if (currentEl === s[loop1Pointer]) {
        count++;
        loop1Pointer++;
      } else {
        break;
      }
    }

    // Second loop only looks for cases where there is a different character in the middle then pointer1 and pointer2
    let loop2Left = i - 1;
    let loop2Right = i + 1;
    while (loop2Left >= 0 && loop2Right <= n) {
      if (
        s[loop2Left] === s[loop2Right] &&
        currentEl !== s[loop2Right] &&
        currentEl !== s[loop2Left] &&
        s[loop2Left] === s[i - 1]
      ) {
        count++;
        loop2Left--;
        loop2Right++;
      } else {
        break;
      }
    }
  }
  return count;
}

console.log(substrCount(7, 'abcbaba'));

// node SpecialPalindromeAgain.js
