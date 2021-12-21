const largestComponent = (graph) => {
  let visited = new Set();
  let largest = 0; // number of nodes in the largest component
  for (let node in graph) {
    const size = explore(graph, node, visited);
    if (size > largest) largest = size;
  }
  console.log(largest);
  return largest;
};

const explore = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);
  let size = 1;
  for (let neighbor of graph[node]) {
    size += explore(graph, neighbor, visited);
  }
  return size;
};

largestComponent({
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
});
