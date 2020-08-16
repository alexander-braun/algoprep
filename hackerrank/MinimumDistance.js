// Complete the minimumDistances function below.
function minimumDistances(a) {
  let shortest = Infinity;
  for (let i = 0; i < a.length; i++) {
    let i2 = a.lastIndexOf(a[i]);
    if (i2 !== i && i2 - i < shortest) shortest = i2 - i;
  }
  if (shortest === Infinity) return -1;
  return shortest;
}
