function checkMagazine(magazine, note) {
  let hashmap = {};
  for (let word of magazine) {
    hashmap[word] ? hashmap[word]++ : (hashmap[word] = 1);
  }

  for (let word of note) {
    if (hashmap[word] && hashmap[word] > 0) {
      hashmap[word]--;
    } else {
      return console.log('NO');
    }
  }

  return console.log('YES');
}

checkMagazine(['hello', 'there'], ['hello', 'there']);
checkMagazine(['Hello', 'there'], ['hello', 'there']);
