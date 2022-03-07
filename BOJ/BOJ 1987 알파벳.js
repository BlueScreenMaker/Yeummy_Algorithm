const [num, ...arr] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const [R, C] = num.split(' ').map(Number);
const alphabets = Array.from(Array(R), ()=> Array(C));
const isVisited = Array(26).fill(false);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer = 0;

function getCode(alphabet) {
    return alphabet.charCodeAt() - 65;
}

function DFS(i, j, count) {
    answer = Math.max(answer, count);
    
    for (let k = 0; k < 4; k++) {
        const x = i + dx[k];
        const y = j + dy[k];

        if ((x >= 0 && x < R) && (y >= 0 && y < C) && !isVisited[getCode(alphabets[x][y])]) {
            isVisited[getCode(alphabets[x][y])] = true;
            DFS(x, y, count + 1);
            isVisited[getCode(alphabets[x][y])] = false;
        }
    }
}

for (let i = 0; i < R; i++) {
    arr[i].split('').map((e, j) => {
        alphabets[i][j] = e;
    });
}

isVisited[getCode(alphabets[0][0])] = true;

DFS(0, 0, 1);

console.log(answer);
