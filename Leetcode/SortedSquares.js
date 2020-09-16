/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  const output = [];
  for (const num of A) {
    output.push(num * num);
  }

  output.sort((a, b) => a - b);
  return output;
};
