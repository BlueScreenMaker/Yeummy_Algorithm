const [num, ...locations] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');

const [N, M] = num.split(' ').map(Number);
const nodes = [];
const graph = [];
const parent = Array.from(Array(N).keys())
let answer = 0;

function find(node) {
    if (parent[node] == node) return node;

    else parent[node] = find(parent[node]);

    return parent[node];
}

function union(nodeA, nodeB) {
    [nodeA, nodeB] = [find(nodeA), find(nodeB)];

    parent[Math.max(nodeA, nodeB)] = Math.min(nodeA, nodeB);
}

function distance(nodeA, nodeB) {
    return Math.sqrt((nodeA[0] - nodeB[0])**2 + (nodeA[1] - nodeB[1])**2);
}

function isDiffParent(nodeA, nodeB) {
    return find(nodeA) !== find(nodeB);
}

for (let i = 0; i < N; i++) {
    const [x, y] = locations[i].split(' ').map(Number);

    nodes.push([x, y]);
}

for (let i = 0; i < M; i++) {
    const [x, y] = locations[i + N].split(' ').map(Number);

    union(x - 1, y - 1);
}

for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
        graph.push([i, j, distance(nodes[i], nodes[j])]);
    }
}

graph.sort((a, b) => a[2] - b[2]);

for (let i = 0, length = graph.length; i < length; i++) {
    const [nodeA, nodeB, dist] = graph[i];
    if (isDiffParent(nodeA, nodeB)) {
        union(nodeA, nodeB);
        answer += dist;
    }
}

console.log(answer.toFixed(2));