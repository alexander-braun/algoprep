function sherlockAndAnagrams(s) {
  let hash = {};
  let substring;
  for (let i = 0, l = s.length; i < l; i++) {
    for (let j = i; j < l; j++) {
      substring = s
        .substring(i, j + 1)
        .split('')
        .sort()
        .join('');
      substring.length > 0 && hash[substring]
        ? hash[substring]++
        : (hash[substring] = 1);
    }
  }

  let sum = 0;
  for (let count of Object.values(hash)) {
    count > 1 && (sum += (count * (count - 1)) / 2);
  }

  return sum;
}

console.log(
  sherlockAndAnagrams(
    'aasdlkafjasdljfaskldjfasdjfölasdjflasdlfkjasdlöjfasdlfaasdlkafjasdljfaskldjfasdjfölasdjflasdlfkjasdlöjfasdlfaasdlkafjasdljfaskldjfasdjfölasdjflasdlfkjasdlöjfasdlfaasdlkafjasdljfaskldjfasdjfölasdjflasdlfkjasdlöjfasdlf'
  )
);
