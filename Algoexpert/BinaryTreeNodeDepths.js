// Iterative: O(N) Time / O(h (height)) space
function nodeDepths(root) {
  let runningDepth = 0;
  let stack = [{ node: root, depth: 0 }];
  while (stack.length) {
    let nodeInfo = stack.pop();
    let node = nodeInfo['node'];
    let depth = nodeInfo['depth'];
    if (!node) continue;
    runningDepth += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return runningDepth;
}

//Recursive O(n) Time / O(h) space
function nodeDepths(root, depth = 0) {
  if (!root) return 0;
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}
