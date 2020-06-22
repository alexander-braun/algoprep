//Own solution O(1) Space / O(n) time
function getNthFib(n) {
  // Write your code here.
  if (n === 1) return 0;

  let lastTwo = [0, 1];
  let count = 2;

  while (count < n) {
    let num1 = lastTwo[0];
    let num2 = lastTwo[1];
    lastTwo[0] = num2;
    lastTwo[1] = num1 + num2;
    count++;
  }

  return lastTwo[lastTwo.length - 1];
}
