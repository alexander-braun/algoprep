function pageCount(n, p) {
  let front = Math.floor(p / 2);
  let back;
  n % 2 !== 0 ? (back = (n - p) / 2) : (back = (n - p + 1) / 2);

  return front < back ? front : Math.floor(back);
}

console.log(pageCount(5, 4)); //0)
console.log(pageCount(6, 2)); //1)
console.log(pageCount(5, 5)); //0)
console.log(pageCount(4, 4)); //0)
console.log(pageCount(7, 3)); //1)
console.log(pageCount(6, 5)); //1)
