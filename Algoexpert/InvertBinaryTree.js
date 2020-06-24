//Own first
function invertBinaryTree(tree) {
  return swapBranch(tree);
}

function swapBranch(tree) {
  if (tree === null) return;
  let left = tree.left;
  tree.left = tree.right;
  tree.right = left;
  swapBranch(tree.left);
  swapBranch(tree.right);
  return tree;
}

//Algo solution
function invertBinaryTree(tree) {
  let queue = [tree];
  while (queue.length) {
    let current = queue.shift();
    if (current === null) continue;
    swapNodes(current);
    queue.push(current.left);
    queue.push(current.right);
  }
}

function swapNodes(tree) {
  let left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}
