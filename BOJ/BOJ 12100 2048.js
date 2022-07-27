const [N, ...blocks] = require('fs')
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
const board = Array.from(Array(Number(N)), () => Array(Number(N)).fill(0));
let MAX = -999;

for (let i = 0; i < Number(N); i++) {
  const block = blocks[i].split(' ').map(Number);
  for (let j = 0; j < Number(N); j++) {
    board[i][j] = Number(block[j]);
    MAX = Math.max(MAX, board[i][j]);
  }
}

function move(board, d) {
  const newBoard = Array.from(Array(Number(N)), () => Array(Number(N)).fill(0));

  if (d === 0) {
    // 위로 이동 -> 위에서 아래로 탐색
    for (let i = 0; i < N; i++) {
      let nextIdx = 0;
      let baseBlock = -1;
      for (let j = 0; j < N; j++) {
        if (board[j][i] === 0) continue;

        // 같다면 합친다.
        if (board[j][i] === baseBlock) {
          newBoard[nextIdx - 1][i] = board[j][i] * 2;
          baseBlock = -1;
          MAX = Math.max(MAX, newBoard[nextIdx - 1][i]);
          continue;
        }

        // 다르다면 초기화
        if (board[j][i] !== baseBlock) {
          newBoard[nextIdx++][i] = board[j][i];
          baseBlock = board[j][i];
        }
      }
    }

    return newBoard;
  }

  if (d === 1) {
    // 아래로 이동 -> 아래에서 위로 탐색

    for (let i = 0; i < N; i++) {
      let nextIdx = Number(N) - 1;
      let baseBlock = -1;
      for (let j = Number(N) - 1; j >= 0; j--) {
        if (board[j][i] === 0) continue;

        // 같다면 합친다.
        if (board[j][i] === baseBlock) {
          newBoard[nextIdx + 1][i] = board[j][i] * 2;
          baseBlock = -1;
          MAX = Math.max(MAX, newBoard[nextIdx + 1][i]);
          continue;
        }

        // 다르다면 초기화
        if (board[j][i] !== baseBlock) {
          newBoard[nextIdx--][i] = board[j][i];
          baseBlock = board[j][i];
        }
      }
    }
    return newBoard;
  }

  if (d === 2) {
    // 왼쪽으로 이동 -> 왼쪽에서 오른쪽으로 탐색
    for (let i = 0; i < N; i++) {
      let nextIdx = 0;
      let baseBlock = -1;
      for (let j = 0; j < N; j++) {
        if (board[i][j] === 0) continue;

        // 같다면 합친다.
        if (board[i][j] === baseBlock) {
          newBoard[i][nextIdx - 1] = board[i][j] * 2;
          baseBlock = -1;
          MAX = Math.max(MAX, newBoard[i][nextIdx - 1]);
          continue;
        }

        // 다르다면 초기화
        if (board[i][j] !== baseBlock) {
          newBoard[i][nextIdx++] = board[i][j];
          baseBlock = board[i][j];
        }
      }

      return newBoard;
    }

    if (d === 3) {
      // 오른쪽으로 이동 -> 오른쪽에서 왼쪽으로 탐색
      for (let i = 0; i < N; i++) {
        let nextIdx = Number(N) - 1;
        let baseBlock = -1;
        for (let j = Number(N) - 1; j >= 0; j--) {
          if (board[i][j] === 0) continue;

          // 같다면 합친다.
          if (board[i][j] === baseBlock) {
            newBoard[i][nextIdx + 1] = board[i][j] * 2;
            baseBlock = -1;
            MAX = Math.max(MAX, newBoard[i][nextIdx + 1]);
            continue;
          }

          // 다르다면 초기화
          if (board[i][j] !== baseBlock) {
            newBoard[i][nextIdx--] = board[i][j];
            baseBlock = board[i][j];
          }
        }
      }
      return newBoard;
    }
  }
}

function dfs(board, turn) {
  if (turn === 5) return;

  for (let d = 0; d < delta.length; d++) {
    const nextBoard = move(board, d);
    if (nextBoard) {
      dfs(nextBoard, turn + 1);
    }
  }
}

dfs(board, 0);

console.log(MAX);
