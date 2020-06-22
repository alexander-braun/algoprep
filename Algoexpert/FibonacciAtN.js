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

  return lastTwo.pop();
}

//Algosolution recursive 1 O(2^n) Time / O(n) space
function getNthFib(n) {
  if (n === 2) return 1;
  else if (n === 1) return 0;
  else return getNthFib(n - 1) + getNthFib(n - 2);
}

//Algosolution 2 recursive with memoization O(n) time / O(n) space
function getNthFib(n, cache = { 1: 0, 2: 1 }) {
  if (n in cache) return cache[n];
  else {
    cache[n] = getNthFib(n - 1, cache) + getNthFib(n - 2, cache);
    return cache[n];
  }
}
