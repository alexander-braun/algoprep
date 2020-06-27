function isValid(s) {
  let hash = {};
  for (let letter of s) {
    if (hash[letter]) hash[letter]++;
    else hash[letter] = 1;
  }

  let values = Object.values(hash);
  let counts = {};
  for (let value of values) {
    if (value in counts) counts[value]++;
    else counts[value] = 1;
  }

  //If there are 2 different letter-counts one has to be 1 to be removed
  let countValues = Object.values(counts);
  let countKeys = Object.keys(counts);

  if (countValues.length === 1) return 'YES';
  if (countValues.length > 2) return 'NO';
  if (
    (countValues[0] === 1 && countKeys[0] === '1') ||
    (countValues[1] === 1 && countKeys[1] === '1')
  ) {
    return 'YES';
  }

  if (countValues[0] === 1 && Math.abs(countKeys[0] - countKeys[1]) < 2)
    return 'YES';
  if (countValues[1] === 1 && Math.abs(countKeys[0] - countKeys[1]) < 2)
    return 'YES';

  return 'NO';
}

console.log(isValid('abcdefghhgfedecba'));
