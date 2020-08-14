function pickingNumbers(a) {
  let longest = 0;
  for (const num of a) {
    let colBg = 0;
    let colSm = 0;
    for (let i = 0; i < a.length; i++) {
      if (num + 1 === a[i] || num === a[i]) {
        colBg++;
      } else if (num - 1 === a[i] || num === a[i]) colSm++;
    }
    if (colBg > longest) longest = colBg;
    if (colSm > longest) longest = colSm;
  }
  return longest;
}
