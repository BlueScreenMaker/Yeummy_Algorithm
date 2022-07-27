/**
 * 로봇 청소기가 주어졌을 때, 청소하는 영역의 개수를 구하는 프로그램을 작성
 *
 * 로봇 청소기가 있는 장소는 N X M 크기의 직사각형으로 나타낼 수 있으며, 1 X 1 크기의 정사각형 칸으로 나누어져 잇다.
 *
 * 각각의 칸은 벽 또는 빈 칸이다.
 *
 * 청소기는 바라보는 방향이 있으며, 이 방향은 동, 서, 남, 북 중 하나이다.
 *
 * 지도의 북쪽에서 부터 r 번째, 서쫏에서 부터 c번재로 위치한 칸은 (r, c)로 나타낼 수 있다.
 *
 * 로봇 청소기는 다음과 같이 작동한다.
 *
 * 1. 현재 위치를 청소한다.
 * 2. 현재 위치에서 다음을 반복하면서 인접한 칸을 탐색한다.
 *    a. 현재 위치에서 바로 왼쪽에 아직 청소하지 않은 빈 공간이 존재한다면, 왼쪽 방학으로 회전한 다음 한 칸을 전진하고 1번으로 돌아간다. 그렇지 않을 경우 왼쪽 방향으로 회전한다.
 *       이때, 왼쪽은 현재 바라보는 방향을 기준으로 한다.
 *    b. 1번으로 돌아가거나 후진 않고 2a번 단계가 연속으로 4번 실행 되었을 경우, 바로 뒤쪽이 벽이라면 작동을 멈춘다. 그렇지 않다면 후진한다.
 */

const [num, dir, ...inputs] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = num.split(' ').map(Number);
const [r, c, d] = dir.split(' ').map(Number);
const graph = Array.from(Array(N), () => Array(M).fill(0));
const delX = [-1, 0, 1, 0];
const delY = [0, 1, 0, -1];

const queue = [];
let pointer = 0;
let answer = 0;

function bfs() {
  queue.push([r, c, d]);
  graph[r][c] = 2;
  ++answer;

  while (pointer < queue.length) {
    const [r, c, d] = queue[pointer];
    let direction = d;
    let turn = 0;
    ++pointer;

    for (let i = 0; i < 4; i++) {
      const dn = (direction + 3 - i) % 4;
      const [dx, dy] = [r + delX[dn], c + delY[dn]];
      direction = dn;

      if (dx < 0 || dx >= N || dy < 0 || dy >= M || graph[dx][dy] !== 0) {
        turn += 1;
        continue;
      }

      // 청소가 가능한 경우
      queue.push([dx, dy, dn]);
      break;
    }

    // 청소가 불가능한 경우
    if (turn === 4) {
      const [dx, dy] = [r + delX[(d + 2) % 4], c + delY[(d + 2) % 4]];

      if (dx < 0 || dx >= N || dy < 0 || dy >= M || graph[dx][dy] === 1) break;

      queue.push([dx, dy, d]);
    }
  }
}

for (let i = 0; i < N; i++) {
  const line = inputs[i].split(' ').map(Number);
  for (let j = 0; j < M; j++) {
    graph[i][j] = line[j];
  }
}

bfs();

console.log(answer);
