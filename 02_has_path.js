// DEPTH FIRST TRAVERSAL
const hasPathDepth = (graph, source, destination) => {
  if (source === destination) {
    console.log("true");
    return true;
  }
  for (let neighbor of graph[source]) {
    if (hasPathDepth(graph, neighbor, destination) === true) {
      console.log("true");
      return true;
    }
  }
  console.log("false");
  return false;
};

// BREADTH FIRST TRAVERSAL
const hasPathBreadth = (graph, source, destination) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === destination) {
      console.log("true");
      return true;
    }
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  console.log("false");
  return false;
};

// DIRECTED GRAPH
const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// hasPathDepth(graph, "f", "k");
hasPathBreadth(graph, "g", "k");
