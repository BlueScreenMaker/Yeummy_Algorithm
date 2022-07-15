/**
 * 체스판 위에 한 나이트가 놓여져 있다.
 *
 * 나이트가 한 번에 이동할 수 있는 칸은 아래 그림에 나와져 있다.
 *
 * 나이트가 이동하려고 하는 칸이 주어진다.
 *
 * 나이트는 몇 번 움직이면 이 칸으로 이동할 수 있을까?
 *
 * 4방향으로 돌면서,
 *
 */

const [N, ...input] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');
const movableCase = [
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, -2],
  [2, -1],
  [1, 2],
  [2, 1],
];
let idx = 0;

function bfs(size, curPos, targetPos) {
  let pointer = 0;
  const [cx, cy] = curPos.split(' ').map(Number);
  const [tx, ty] = targetPos.split(' ').map(Number);
  const isVisited = Array.from(Array(+size), () => Array(+size).fill(false));
  const queue = [[cx, cy, 0]];

  isVisited[cx][cy] = true;

  while (pointer < queue.length) {
    const [x, y, step] = queue[pointer];
    pointer++;

    if (x === tx && y === ty) return step;

    for (let i = 0, length = movableCase.length; i < length; i++) {
      const [dx, dy] = [x + movableCase[i][0], y + movableCase[i][1]];

      if (dx < 0 || dx >= size || dy < 0 || dy >= size || isVisited[dx][dy]) continue;

      queue.push([dx, dy, step + 1]);
      isVisited[dx][dy] = true;
    }
  }
}

for (let i = 0; i < N; i++) {
  const [size, curPos, targetPos] = input.slice(idx, idx + 3);

  console.log(bfs(size, curPos, targetPos));
  idx += 3;
}
