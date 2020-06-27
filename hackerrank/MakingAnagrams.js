function makeAnagram(a, b) {
  let hash_a = {};
  let hash_b = {};
  for (let element of a) {
    if (hash_a[element]) {
      hash_a[element]++;
    } else {
      hash_a[element] = 1;
    }
  }
  for (let element of b) {
    if (hash_b[element]) {
      hash_b[element]++;
    } else {
      hash_b[element] = 1;
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (
      a[i] in hash_b &&
      hash_b[a[i]] > 0 &&
      a[i] in hash_a &&
      hash_a[a[i]] > 0
    ) {
      hash_b[a[i]]--;
      hash_a[a[i]]--;
    }
  }

  let keys_a = Object.keys(hash_a);
  let keys_b = Object.keys(hash_b);
  let count = 0;

  for (let i = 0; i < keys_a.length; i++) {
    count += hash_a[keys_a[i]];
  }

  for (let i = 0; i < keys_b.length; i++) {
    count += hash_b[keys_b[i]];
  }

  return count;
}

console.log(
  makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')
);
