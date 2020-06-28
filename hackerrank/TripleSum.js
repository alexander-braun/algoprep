function triplets(a, b, c) {
  for (let i of [a, b, c]) {
    i.sort((a, b) => a - b);
  }
  a = [...new Set(a)];
  b = [...new Set(b)];
  c = [...new Set(c)];

  return findTriplets(a, b, c);
}

function findTriplets(a, b, c) {
  let count = 0;
  let a_i = 0;
  let b_i = 0;
  let c_i = 0;
  while (b_i < b.length) {
    while (a_i < a.length && a[a_i] <= b[b_i]) {
      a_i++;
    }
    while (c_i < c.length && c[c_i] <= b[b_i]) {
      c_i++;
    }

    count += a_i * c_i;
    b_i++;
  }
  return count;
}

console.log(triplets([1, 3, 5, 7], [5, 7, 9], [7, 9, 11, 13]));

//  node TripleSum.js
