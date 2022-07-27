const [NM, ...input] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = NM.split(' ').map(Number);
const graph = Array.from(Array(N), () => Array(M).fill(0));
const delta = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function bfs() {}

for (let i = 0; i < N; i++) {
  const row = input[i].split('');
  for (let j = 0; j < M; j++) {
    graph[i][j] = row[j];
  }
}
