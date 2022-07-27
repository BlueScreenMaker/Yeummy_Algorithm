const [size, ...input] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');

const [M, N] = size.split(' ').map(Number);
const graph = Array.from(Array(N), () => Array(M).fill(null));
const isVisited = Array.from(Array(N), () => Array(M).fill(null));
const delta = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
const answer = {
  W: 0,
  M: 0,
};

function bfs(x, y) {
  let answer = 0;
  let pointer = 0;
  const initialVal = graph[x][y];
  const queue = [[x, y]];
  isVisited[x][y] = true;

  while (pointer < queue.length) {
    const [x, y] = queue[pointer];
    ++pointer;
    ++answer;

    for (let i = 0; i < delta.length; i++) {
      const [dx, dy] = [x + delta[i][0], y + delta[i][1]];

      if (dx < 0 || dx >= N || dy < 0 || dy >= M) continue;
      if (isVisited[dx][dy] || graph[dx][dy] !== initialVal) continue;

      isVisited[dx][dy] = true;
      queue.push([dx, dy]);
    }
  }
  return answer;
}

for (let i = 0; i < N; i++) {
  const row = input[i].split('');
  for (let j = 0; j < M; j++) {
    graph[i][j] = row[j];
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (isVisited[i][j]) continue;
    const count = bfs(i, j) ** 2;

    if (graph[i][j] === 'W') answer.W += count;
    else answer.M += count;
  }
}

console.log(`${answer.W} ${answer.M}`);
