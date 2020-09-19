// Complete the camelcase function below.
function camelcase(s) {
  let count = 0;
  for (const char of s) {
    if (char.toUpperCase() === char) {
      count++;
    }
  }
  if (count === 0) {
    return 1;
  } else return 1 + count;
}
