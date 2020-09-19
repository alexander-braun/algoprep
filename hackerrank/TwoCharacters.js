// Complete the alternate function below.
function alternate(s) {
  const distinct = [];
  for (const char of s) {
    if (distinct.indexOf(char) < 0) {
      distinct.push(char);
    }
  }

  const pairs = [];
  for (let i = 0; i < distinct.length; i++) {
    for (let j = i + 1; j < distinct.length; j++) {
      pairs.push([distinct[i], distinct[j]]);
    }
  }
  let longest = 0;
  for (const pair of pairs) {
    let current;
    let valid = true;
    for (let i = 0; i < s.length; i++) {
      if (pair.indexOf(s[i]) >= 0) {
        if (current !== s[i]) {
          current = s[i];
        } else {
          valid = false;
          break;
        }
      }
    }
    if (valid) {
      let length = 0;
      for (let i = 0; i < s.length; i++) {
        if (pair.indexOf(s[i]) >= 0) {
          length++;
        }
      }
      if (longest < length) {
        longest = length;
      }
    }
  }
  return longest;
}
