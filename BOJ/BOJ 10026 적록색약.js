/**
 * 적록색약은 빨간색과 초록생의 차이를 거의 느끼지 못한다.
 *
 * 따라서, 적록색약인 사람이 보는 그림은 아닌 사람이 보는 그림과는 좀 다를 수 있다.
 *
 * 크기가 N X N 인 그리드의 각 칸에 R, G, B 중 하나를 색칠한 그림이 있다.
 *
 * 그림은 몇 개의 구역으로 나뉘어져 있는데, 구역은 같은 색으로 이루어져 있다.
 *
 * 또, 같은 색상이 상하좌우로 인접해 있는 경우에 두 글자는 같은 구역에 속한다.
 *
 * 적록 색약이 아닌 사람이 봤을 때, 구역의 수는 총 4개이다.
 *
 * 찾아봤는데, 적록 색약은 빨간색과 초록색을 구분하지 못하는 것이라고 한다.
 */

const [N, ...input] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');

const graph = Array.from(Array(+N), () => Array(+N).fill(null));
let isVisited = Array.from(Array(+N), () => Array(+N).fill(false));
const normalRGBArea = {};
const disableRGBArea = {};
const delta = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function normalBFS(row, col, type) {
  const queue = [[row, col]];
  let pointer = 0;

  while (pointer < queue.length) {
    const [row, col] = queue[pointer];

    ++pointer;

    for (let i = 0, length = delta.length; i < length; i++) {
      const [dr, dc] = [row + delta[i][0], col + delta[i][1]];

      if (dr < 0 || dr >= N || dc < 0 || dc >= N) continue;

      if (!isVisited[dr][dc] && type === graph[dr][dc]) {
        isVisited[dr][dc] = true;
        queue.push([dr, dc]);
      }
    }
  }
}

function disableBFS(row, col, type) {
  const queue = [[row, col]];
  let pointer = 0;

  while (pointer < queue.length) {
    const [row, col] = queue[pointer];

    ++pointer;

    for (let i = 0, length = delta.length; i < length; i++) {
      const [dr, dc] = [row + delta[i][0], col + delta[i][1]];

      if (dr < 0 || dr >= N || dc < 0 || dc >= N) continue;

      if (!isVisited[dr][dc] && (type === 'R' || type === 'G')) {
        if (graph[dr][dc] === 'R' || graph[dr][dc] === 'G') {
          isVisited[dr][dc] = true;
          queue.push([dr, dc]);
        }
      } else if (!isVisited[dr][dc] && type === graph[dr][dc]) {
        isVisited[dr][dc] = true;
        queue.push([dr, dc]);
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  const line = input[i].split('');
  for (let j = 0; j < N; j++) {
    graph[i][j] = line[j];
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!isVisited[i][j]) {
      const type = graph[i][j];
      normalBFS(i, j, type);

      if (normalRGBArea[type]) normalRGBArea[type] += 1;
      else normalRGBArea[type] = 1;
    }
  }
}

isVisited = Array.from(Array(+N), () => Array(+N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!isVisited[i][j]) {
      const type = graph[i][j];
      disableBFS(i, j, type);

      if (disableRGBArea[type]) disableRGBArea[type] += 1;
      else disableRGBArea[type] = 1;
    }
  }
}

console.log(
  `${Object.keys(normalRGBArea).reduce((acc, key) => acc + normalRGBArea[key], 0)} ${Object.keys(disableRGBArea).reduce(
    (acc, key) => acc + disableRGBArea[key],
    0
  )}`
);
