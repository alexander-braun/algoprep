function riverSizes(matrix) {
  let sizes = [];
  let visited = matrix.map((row) => row.map((value) => false));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      let result = traverseNode(i, j, matrix, visited, sizes);
      visited = result[0];
      sizes = result[1];
    }
  }

  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  let nodesToExplore = [[i, j]];

  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];

    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currentRiverSize++;
    let unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    for (let neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }

  if (currentRiverSize > 0) {
    sizes.push(currentRiverSize);
  }

  return [visited, sizes];
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  let unvisitedNeighbors = [];

  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  if (j < matrix[i].length - 1 && !visited[i][j + 1])
    unvisitedNeighbors.push([i, j + 1]);

  return unvisitedNeighbors;
}

exports.riverSizes = riverSizes;
