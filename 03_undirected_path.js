const undirPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  //   console.log(graph);
  return hasPathDepth(graph, nodeA, nodeB, new Set());
};

const hasPathDepth = (graph, src, dst, visited) => {
  if (src === dst) {
    console.log("true");
    return true;
  }
  if (visited.has(src)) {
    return false;
  }
  visited.add(src);
  for (let neighbor of graph[src]) {
    if (hasPathDepth(graph, neighbor, dst, visited)) {
      return true;
    }
  }
  console.log("false");
  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

// UNDIRECTED GRAPH
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

undirPath(edges, "k", "l");
