/**
 * 어떤 큰 도화지에 그림이 그려져 있을 때, 그 그림의 개수와, 그 그림 중 넣ㅂ이가 가장 넓은 것의 넓이를 출력하여라.
 *
 * 단 그림이라는 것은 1로 연결된 것을 한 그림이라고 정의하자.
 *
 * 가로나 세로로 연결된 것은 떨어진 그림이다.
 *
 * 그림의 넓이란 그림에 포함된 1의 개수이다.
 *
 *
 * 입력
 *
 * 첫 줄에는 세로 크기 n(1 ≤ n ≤ 500)과 가로 크기 m(1 ≤ m ≤ 500)이 주어진다.
 *
 * 두 번째 줄 부터 n + 1 줄 까지 그림의 정보가 주어진다.
 *
 *
 */

const [num, ...arr] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');

const delta = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const [N, M] = num.split(' ').map(Number);
const graph = Array.from(Array(N), () => Array(M).fill(0));
let [numPicture, currentNumPicture, numMaxPicture] = [0, 0, 0];

function DFS(x, y, num) {
  graph[x][y] = 0;
  currentNumPicture++;

  // 4번 돌리면서
  for (let i = 0; i < 4; i++) {
    // 이동할 위치
    const [nx, ny] = [x + delta[i][0], y + delta[i][1]];
    // 범위에 맞으면
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    // DFS 돌린다.
    if (graph[nx][ny] === 1) DFS(nx, ny, num + 1);
  }
}

// 초기화
for (let row = 0, length = arr.length; row < length; row++) {
  const value = arr[row].split(' ').map(Number);
  for (let column = 0, length = value.length; column < length; column++) {
    graph[row][column] = value[column];
  }
}

for (let row = 0; row < N; row++) {
  for (let column = 0; column < M; column++) {
    if (graph[row][column] === 1) {
      currentNumPicture = 0;
      DFS(row, column, 1);

      numMaxPicture = Math.max(currentNumPicture, numMaxPicture);
      numPicture++;
    }
  }
}

console.log(numPicture);
console.log(numMaxPicture);
