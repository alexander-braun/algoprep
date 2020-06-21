//Find the largest Range from an array of number (algoexpert) own solution
function largestRange(array) {
  //Create Hashtable
  let hash = {};
  array.forEach((element) => {
    hash[element] = true;
  });

  let range = [];
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let neighbor = true;
    let temp = [];
    let operator = 1;

    while (neighbor) {
      if (hash[current]) {
        temp.push(current);
        hash[current] = false;
        current = current + operator;
      } else {
        if (operator !== -1) {
          operator = -1;
          current = array[i] - 1;
        } else {
          neighbor = false;
        }
      }
    }

    if (temp.length && range.length < temp.length) range = temp;
  }

  let lowest = range[0];
  let highest = range[0];

  for (let i = 1; i < range.length; i++) {
    if (range[i] > highest) highest = range[i];
    if (range[i] < lowest) lowest = range[i];
  }

  return [lowest, highest];
}
