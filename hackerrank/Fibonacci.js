function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let last = 0;
  let next = 1;
  let index = 2;
  while (index <= n) {
    let temp = last;
    last = next;
    next += temp;
    index++;
  }
  return next;
}
