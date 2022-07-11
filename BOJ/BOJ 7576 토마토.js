/**
 * 철수의 토마토 농장에서는 토마토를 보관하는 큰 창고를 가지고 있다.
 *
 * 토마토는 아래의 그림과 같이 격자 모양 상자의 칸에 하나씩 넣어 창고에 보관한다.
 *
 * 창고에 보관되는 토마토들 중에는 잘 익은 것도 잇지만 아직, 익지 않는 통마토들도 있을 수 있다.
 *
 * 보관 후 하루가 지나면, 익은 토마토들의 인접한 곳에 있는 익지 않은 토마토들은 익은 토마토의 영향을 받아 익게 된다.
 *
 * 하나의 토마토의 인접한 곳은 왼쪽, 오른쪽, 앞, 뒤 네 방향에 있는 토마토를 의미한다.
 *
 * 대각선 방향에 있는 토마토들에게는 영향을 주기 못하며, 토마토가 저절로 익는 경우는 없다.
 *
 * 철수는 창고에 보관된 토마토들이 며칠이 지나면 다 익게 되는지, 그 최소 일수를 알고 싶어 한다.
 *
 * 토마토를 창고에 보관하는 격자 모양이 상자들의 크기와 익지 않은 토마토들의 정보가 주어졌을 때, 며칠이 지나면 토마토들이 모두 익는지, 그 최소 일수를 구하라
 *
 *
 */

const [number, ...inputs] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');

const [M, N] = number.split(' ').map(Number);
const graph = Array.from(Array(N), () => Array(M).fill(0));
const queue = [];
const delta = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let answer = 0;
let idx = 0;
let isAvailable = true;
let count = 0;

function bfs() {
  while (idx < queue.length) {
    const [x, y, day] = queue[idx];

    ++idx;

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + delta[i][0], y + delta[i][1]];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (graph[nx][ny] === 0) {
        ++count;
        graph[nx][ny] = day + 1;
        queue.push([nx, ny, day + 1]);
      }
    }
  }
}

for (let row = 0; row < N; row++) {
  const line = inputs[row].split(' ').map(Number);

  for (let col = 0; col < M; col++) {
    const value = line[col];
    if (value === 1) {
      queue.push([row, col, 0]);
    }
    graph[row][col] = line[col];
  }
}

bfs();

for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    if (graph[row][col] === 0 && isAvailable) {
      isAvailable = false;
      console.log(-1);
      break;
    }
    answer = Math.max(answer, graph[row][col]);
  }
}

if (isAvailable && count === 0) console.log(0);
else if (isAvailable) console.log(answer);
