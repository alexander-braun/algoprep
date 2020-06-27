function commonChild(str1, str2) {
  let matrix = [];
  for (let i = 0; i <= str2.length; i++) {
    const row = [];
    for (let j = 0; j <= str1.length; j++) {
      row.push(0);
    }
    matrix.push(row);
  }

  for (let i = 1; i < matrix.length; i++) {
    // row
    for (let j = 1; j < matrix[0].length; j++) {
      // col
      if (str1[j - 1] === str2[i - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
  let row = matrix.length - 1;
  let col = matrix[row].length - 1;
  return matrix[row][col];
}

console.log(commonChild('BCDEF', 'FBDAMN'));

//node LongestCommonSubsequence.js
