/**
 * 상근이는 빈 공간과 벽으로 이루어진 건물에 갇혀있다. ( 빈 공간과 벽으로 이루어져 있다. )
 *
 * 건물의 일부에는 불이 났고, 상근이는 출그를 향해 뛰고 있다.
 *
 * 매 초마다, 불은 동서남북 방향으로 인접한 빈 공간으로 퍼져나간다.
 *
 * 벽에는 불이 붙지 않는다.
 *
 * 상근이는 동서남북 인접한 칸으로 이동할 수 있으며, 1초가 걸린다.
 *
 * 상근이는 벽을 통과할 수 없고, 불이 옮겨진 칸또는 이제는 불이 붙으려는 칸으로 이동할 수 없다. 상근이가 있는 칸에 불이 옮겨옴과 동시에 다른칸으로 이동할 수 있다.
 *
 * 빌딩의 지도가 주어졌을 때, 얼마나 빨리 빌딩을 탈출할 수 있는지 구하는 프로그램을 작성하시오.
 */
const [N, ...inputs] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');
const delta = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let idx = 0;

function makeGraph(col, row, graphInfo) {
  const personPos = [];
  const firePos = [];
  const graph = Array.from(Array(+row), () => Array(+col).fill(null));

  for (let i = 0; i < row; i++) {
    const row = graphInfo[i].split('');
    for (let j = 0; j < col; j++) {
      if (row[j] === '@') personPos.push([i, j, 0]);
      if (row[j] === '*') firePos.push([i, j, 0]);

      graph[i][j] = row[j];
    }
  }
  return [graph, personPos, firePos];
}

function fireMovement(col, row, firePos, graph) {
  const fireGraph = Array.from(Array(row), () => Array(col).fill(null));
  const queue = [...firePos];
  let pointer = 0;

  queue.forEach(([i, j, _]) => {
    fireGraph[i][j] = 0;
  });

  while (pointer < queue.length) {
    // 불의 좌표
    const [cx, cy, weight] = queue[pointer];
    ++pointer;

    for (let i = 0, length = delta.length; i < length; i++) {
      const [dx, dy] = [cx + delta[i][0], cy + delta[i][1]];

      if (dx < 0 || dx >= row || dy < 0 || dy >= col) continue;
      if (graph[dx][dy] === '#' || fireGraph[dx][dy]) continue;

      if (graph[dx][dy] === '.' || graph[dx][dy] === '@') {
        fireGraph[dx][dy] = weight + 1;
        queue.push([dx, dy, weight + 1]);
      }
    }
  }

  return fireGraph;
}

function personMovement(col, row, fireGraph, graph, personPos) {
  let pointer = 0;
  const personGraph = Array.from(Array(row), () => Array(col).fill(null));
  const queue = [...personPos];

  queue.forEach(([i, j, _]) => {
    personGraph[i][j] = 0;
  });

  while (pointer < queue.length) {
    const [cx, cy, weight] = queue[pointer];
    ++pointer;

    for (let i = 0; i < delta.length; i++) {
      const [dx, dy] = [cx + delta[i][0], cy + delta[i][1]];

      if (dx < 0 || dx >= row || dy < 0 || dy >= col) {
        return weight + 1;
      }
      if (
        (fireGraph[dx][dy] !== null && fireGraph[dx][dy] <= weight + 1) ||
        graph[dx][dy] === '#' ||
        personGraph[dx][dy]
      )
        continue;

      if (graph[dx][dy] === '.') {
        personGraph[dx][dy] = weight + 1;
        queue.push([dx, dy, weight + 1]);
      }
    }
  }
  return 'IMPOSSIBLE';
}

for (let i = 0; i < +N; i++) {
  const [col, row] = inputs
    .slice(idx, idx + 1)[0]
    .split(' ')
    .map(Number);
  idx += 1;

  const graphInfo = inputs.slice(idx, idx + col);
  idx += row;

  const [graph, personPos, firePos] = makeGraph(col, row, graphInfo);

  const fireGraph = fireMovement(col, row, firePos, graph);

  const ans = personMovement(col, row, fireGraph, graph, personPos);

  console.log(ans);
}
