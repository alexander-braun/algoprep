//First naive Approach O(N²) Time / O(1) Space
function smallestDifference(arrayOne, arrayTwo) {
  let smallestDifference = Infinity;
  let smallestPair = [];

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      let difference = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (difference < smallestDifference) {
        smallestPair = [arrayOne[i], arrayTwo[j]];
        smallestDifference = difference;
      }
    }
  }
  return smallestPair;
}

//Algo O(Nlog(N) + Mlog(M))) / O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);
  let idx1 = 0;
  let idx2 = 0;
  let pair = [];
  let smallest = Infinity;
  let current = Infinity;

  while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
    let firstNum = arrayOne[idx1];
    let secondNum = arrayTwo[idx2];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idx1++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idx2++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      pair = [firstNum, secondNum];
    }
  }

  return pair;
}
