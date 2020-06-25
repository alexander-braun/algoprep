/*function minimumBribes(q) {
  let changes = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) > 2) {
      return console.log('Too chaotic');
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      console.log(i, j);
      if (q[j] > q[i]) changes += 1;
    }
  }
  return console.log(changes);
}

minimumBribes([1, 3, 2, 4, 5, 8, 6, 7]);

3 - 2 = 1;
8 - 6 = 2;
*/

function minimumBribes(q) {
  let changes = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] > i + 1) {
      changes += q[i] - (i + 1);
    }

    if (q[i] - (i + 1) > 2) return console.log('Too Chaotic');
  }

  return console.log(changes);
}
minimumBribes([2, 1, 5, 3, 4]);

//[1, 3, 4, 4, 8, 5, 6, 7]
