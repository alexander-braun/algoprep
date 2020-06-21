//Get primes till n
function sieveOfEratosthenes(n) {
  let arr = new Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; j * i <= n; j++) {
      arr[i * j] = false;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) result.push(i);
  }

  return result;
}
console.log(sieveOfEratosthenes(20));
