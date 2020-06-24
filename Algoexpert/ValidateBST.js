//O(n) time / O(depth) space

function validateBst(tree) {
  // Write your code here.
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, min, max) {
  if (tree === null) return true;
  if (tree.value < min || tree.value >= max) return false;
  let leftValid = validateBstHelper(tree.left, min, tree.value);
  return leftValid && validateBstHelper(tree.right, tree.value, max);
}
