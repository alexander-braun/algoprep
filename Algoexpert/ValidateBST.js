//O(n) time / O(depth) space

function validateBst(tree) {
  // Write your code here.
  return validateHelper(tree, -Infinity, Infinity);
}

function validateHelper(tree, min, max) {
  if (tree === null) return true;
  if (tree.value < min || tree.value >= max) return false;
  let leftTreeValid = validateHelper(tree.left, min, tree.value);
  return leftTreeValid && validateHelper(tree.right, tree.value, max);
}
