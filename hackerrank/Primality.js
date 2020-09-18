function primality(n) {
  if (n < 2) return 'Not prime';
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return 'Not prime';
  }
  return 'Prime';
}
