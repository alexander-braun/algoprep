/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let newNum = '';
  let notEdited = true;
  for (let digit of String(num)) {
    if (digit === '9') {
      newNum += digit;
    } else if (notEdited) {
      newNum += 9;
      notEdited = false;
    } else {
      newNum += digit;
    }
  }

  return Number(newNum);
};
