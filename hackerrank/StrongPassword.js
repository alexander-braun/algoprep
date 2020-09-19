// Complete the minimumNumber function below.
function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  const numbers = '0123456789';
  const lower_case = 'abcdefghijklmnopqrstuvwxyz';
  const upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const special_characters = '!@#$%^&*()-+';

  let hasNum = false;
  let hasLower = false;
  let hasUpper = false;
  let hasSpecial = false;

  for (const char of password) {
    if (hasNum && hasLower && hasUpper && hasSpecial) {
      break;
    }
    if (numbers.indexOf(char) >= 0) {
      hasNum = true;
    } else if (lower_case.indexOf(char) >= 0) {
      hasLower = true;
    } else if (upper_case.indexOf(char) >= 0) {
      hasUpper = true;
    } else if (special_characters.indexOf(char) >= 0) {
      hasSpecial = true;
    }
  }

  let missing = 0;
  if (!hasNum) {
    missing++;
  }
  if (!hasLower) {
    missing++;
  }
  if (!hasUpper) {
    missing++;
  }
  if (!hasSpecial) {
    missing++;
  }

  let sum = password.length + missing;

  return Math.max(missing, 6 - n);
}
