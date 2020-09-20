/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let squareNumbers = [];
  for (let i = 1; i * i <= n; i++) {
    squareNumbers.push(i * i);
  }

  let lowest = Infinity;
  let index = squareNumbers.length - 1;
  for (const num of squareNumbers) {
    let sum = createNums(n, squareNumbers, index);
    if (sum < lowest) {
      lowest = sum;
    }
    index--;
  }
  return lowest;
};

const createNums = (n, squareNumbers, index) => {
  let currentSum = n;
  let count = 0;
  while (currentSum > 0) {
    if (currentSum - squareNumbers[index] >= 0) {
      currentSum -= squareNumbers[index];
      count++;
      console.log(squareNumbers[index]);
    } else {
      index--;
    }
  }
  console.log('----------------');
  return count;
};

numSquares(43);
// node PerfectSquares
