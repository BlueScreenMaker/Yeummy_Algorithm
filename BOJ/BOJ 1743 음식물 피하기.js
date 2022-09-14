const [nums, ...inputs] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, K] = nums.split(' ').map(Number);
const graph = Array.from(Array(N), () => Array(M).fill(0));
const delta = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
let answer = 0;

function bfs(x, y) {
  let pointer = 0;
  let value = 1;
  const queue = [[x, y]];
  graph[x][y] = 0;

  while (pointer < queue.length) {
    const [x, y] = queue[pointer];
    ++pointer;

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = [x + delta[i][0], y + delta[i][1]];

      if (dx < 0 || dx >= N || dy < 0 || dy >= M) continue;

      if (graph[dx][dy] === 1) {
        graph[dx][dy] = 0;
        ++value;
        queue.push([dx, dy]);
      }
    }
  }

  return value;
}

for (let i = 0; i < K; i++) {
  const [x, y] = inputs[i].split(' ').map(Number);
  graph[x - 1][y - 1] = 1;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === 1) {
      answer = Math.max(answer, bfs(i, j));
    }
  }
}

console.log(answer);
