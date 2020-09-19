// Complete the superReducedString function below.
function superReducedString(s) {
  while (!test(s)) {
    s = stripString(s);
  }
  return s.length ? s : 'Empty String';
}

function test(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      return false;
    }
  }
  return true;
}

function stripString(s) {
  let string = '';
  let index = 0;
  while (index < s.length) {
    if (s[index] === s[index + 1]) {
      index += 2;
    } else {
      string += s[index];
      index++;
    }
  }
  return string;
}
