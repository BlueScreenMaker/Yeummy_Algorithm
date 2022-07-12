/**
 * 지훈이는 미로에서 일을 한다. 지훈이를 미로에서 탈출하도록 도와주자!
 *
 * 미로에서 지훈이의 위치와 불이 붙은 위치를 감안해서 지훈이가 불에 타기전에 탈출할 수 있는지의 여부, 그리고 얼마나 빨리 탈출할 수 있는지를 결정해야 한다.
 *
 * 지훈이와 불은 매 분마다 한 칸씩 수평 또는 수직으로 이동한다. ( 상, 하, 좌, 우 )
 *
 * 불은 각 지점에서 네 방향으로 확산된다.
 *
 * 지훈이는 미로의 가장자리에 접힌 공간에서 탈출할 수 있다.
 *
 * 지훈이와 불은 벽이 있는 공간은 통과하지 못한다.
 *
 * #: 벽
 * .: 지나갈 수 있는 공간
 * J: 지훈이의 미로에서의 초기위치 (지나갈 수 있는 공간)
 * F: 불이 난 공간
 *
 * 지금 드는 궁금증
 *
 * 1. 불과 지훈이의 이동 방향은 언제로 정할 수 있을까?
 * 2. 지훈이가 탈출 할 수 없는 경우는? ( 사방으로 봤을 때, 모두 F인 경우 )
 *
 * queue에 J와 F의 위치를 먼저 넣는다.
 */

const [number, ...inputs] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .split('\n');

const [R, C] = number.split(' ').map(Number);
const graph = Array.from(Array(R), () => Array(C).fill(null));
const fireTimeWeight = Array.from(Array(R), () => Array(C).fill(null));
const personTimeWeight = Array.from(Array(R), () => Array(C).fill(null));
const fireQueue = [];
const personQueue = [];
const delta = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function fireMoveBFS() {
  let pointer = 0;

  while (pointer < fireQueue.length) {
    const [x, y, weight] = fireQueue[pointer];
    ++pointer;

    for (let i = 0; i < delta.length; i++) {
      const [dx, dy] = [x + delta[i][0], y + delta[i][1]];

      if (dx < 0 || dx >= R || dy < 0 || dy >= C) continue;
      if (graph[dx][dy] === '#') continue;

      if (fireTimeWeight[dx][dy] === null) {
        fireTimeWeight[dx][dy] = weight + 1;
        fireQueue.push([dx, dy, weight + 1]);
      }
    }
  }
}

function personMoveBFS() {
  let pointer = 0;
  let isFinished = false;

  while (pointer < personQueue.length) {
    const [x, y, weight] = personQueue[pointer];
    ++pointer;

    for (let i = 0; i < delta.length; i++) {
      const [dx, dy] = [x + delta[i][0], y + delta[i][1]];

      if (dx < 0 || dx >= R || dy < 0 || dy >= C) {
        isFinished = true;
        console.log(weight + 1);
        break;
      }
      if (graph[dx][dy] === '#') continue;

      if (personTimeWeight[dx][dy] === null) {
        if (fireTimeWeight[dx][dy] > weight + 1 || fireTimeWeight[dx][dy] === null) {
          personTimeWeight[dx][dy] = weight + 1;
          personQueue.push([dx, dy, weight + 1]);
        }
      }
    }
    if (isFinished) break;
  }
  if (!isFinished) {
    console.log('IMPOSSIBLE');
  }
}

for (let row = 0; row < R; row++) {
  const line = inputs[row].split('');

  for (let col = 0; col < C; col++) {
    const type = line[col];

    if (type === 'J') {
      personQueue.push([row, col, 0]);
      personTimeWeight[row][col] = 0;
    }

    if (type === 'F') {
      fireQueue.push([row, col, 0]);
      fireTimeWeight[row][col] = 0;
    }

    graph[row][col] = line[col];
  }
}

fireMoveBFS();
personMoveBFS();
