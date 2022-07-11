/**
 * 미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸을 나타낸다
 * 이러한 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야하는 최소의 칸 수를 구하는 프로그램을 작성하시오.
 *
 * 한 칸에서 다른 칸으로 이동할 때, 서로 인접한 칸으로만 이동할 수 있다.
 *
 * 위의 예에서는 15칸을 지나야 (N, M)의 위치로 이동할 수 있다.
 *
 * 입력
 * 첫째 줄에 두 정수 N, M(2 ≤ N, M ≤ 100)이 주어진다. 다음 N개의 줄에는 M개의 정수로 미로가 주어진다. 각각의 수들은 붙어서 입력으로 주어진다.
 *
 * 출력
 * 첫째 줄에 지나야 하는 최소의 칸 수를 출력한다. 항상 도착위치로 이동할 수 있는 경우만 입력으로 주어진다.
 *
 * 풀이
 * dfs를 통해 N, M의 위치에 먼저 도달한 것을 출력하면 될 것 같다.
 *
 * 1. 2차원 배열 만들고
 * 2. 입력 받고
 * 3. dfs를 통해 최단거리의 수를 반환한다.
 *
 * 아마 재귀를 통해 해결 하면 될듯?
 */

const [number, ...inputs] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');
let answer = 0;
const [N, M] = number.split(' ').map(Number);
const graph = Array.from(Array(N), () => Array(M).fill(0));
const delta = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function bfs() {
  const visit = Array.from(Array(N), () => Array(M).fill(false));
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [x, y, distance] = queue.shift();

    if (x === N - 1 && y === M - 1) return distance;

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = [delta[i][0], delta[i][1]];

      if (x + dx < 0 || x + dx >= N || y + dy < 0 || y + dy >= M) continue;

      if (graph[x + dx][y + dy] === 1 && !visit[x + dx][y + dy]) {
        visit[x + dx][y + dy] = true;
        queue.push([x + dx, y + dy, distance + 1]);
      }
    }
  }
}

for (let row = 0; row < N; row++) {
  const line = inputs[row].split('').map(Number);
  for (let column = 0; column < M; column++) {
    graph[row][column] = line[column];
  }
}

console.log(bfs());
