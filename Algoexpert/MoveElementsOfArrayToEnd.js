//First own 15min
function moveElementToEnd(array, toMove) {
  let p1 = 0;
  let p2 = array.length - 1;
  while (p1 < p2) {
    if (array[p2] === toMove) p2--;
    if (array[p1] === toMove && array[p2] !== toMove) {
      let temp = array[p2];
      array[p2] = array[p1];
      array[p1] = temp;
      p1++;
    } else if (array[p1] !== toMove) p1++;
  }

  return array;
}

//Algo solution
function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (i < j && array[j] === toMove) {
      j--;
    }

    if (array[i] === toMove) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    i++;
  }

  return array;
}
