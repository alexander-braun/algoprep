// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
  let squares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  const changesCollection = [];
  for (const square of squares) {
    let changes = 0;
    for (let i = 0; i < square.length; i++) {
      for (let j = 0; j < square[i].length; j++) {
        changes += Math.abs(s[i][j] - square[i][j]);
      }
    }
    changesCollection.push(changes);
  }
  return Math.min(...changesCollection);
}
