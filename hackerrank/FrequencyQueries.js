function freqQuery(queries) {
  let result = [];
  let frequencies = {};
  let elements = {};

  for (let i = 0; i < queries.length; i++) {
    let [op, q] = queries[i];

    if (op === 1) {
      q in elements && elements[q] in frequencies && frequencies[elements[q]]--;
      q in elements ? elements[q]++ : (elements[q] = 1);
      elements[q] in frequencies
        ? frequencies[elements[q]]++
        : (frequencies[elements[q]] = 1);
    }

    if (op === 2 && q in elements && elements[q] > 0) {
      frequencies[elements[q]] > 0 && frequencies[elements[q]]--;
      elements[q]--;
      elements[q] in frequencies
        ? frequencies[elements[q]]++
        : (frequencies[elements[q]] = 1);
    }

    if (op === 3) {
      result.push(frequencies[q] > 0 ? 1 : 0);
    }
  }

  return result;
}

let elements = [
  [1, 5],
  [1, 6],
  [3, 2],
  [1, 10],
  [1, 10],
  [1, 6],
  [2, 5],
  [3, 2],
];

//node FrequencyQueries.js

console.log(freqQuery(elements)); // 01
