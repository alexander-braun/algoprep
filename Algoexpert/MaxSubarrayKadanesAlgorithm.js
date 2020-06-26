function kadanesAlgorithm(array) {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];
  for (let i = 1; i < array.length; i++) {
    let num = array[i];
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

let unsorted = true;
let index = 1;
let count = new Array(q.length).fill(0);
while (index < q.length) {
  if (q[index - 1] > index) {
    let temp = q[index];
    q[index] = q[index - 1];
    q[index - 1] = temp;
    count[index]++;
    if (count[index] > 2) return 'Too chaotic';
  } else {
    index++;
  }
}
let amount = count.reduce((a, b) => a + b);
