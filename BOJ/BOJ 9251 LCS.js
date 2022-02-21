const [A, B] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const memo = Array.from(Array(A.length + 1), ()=> Array(B.length + 1).fill(0));
const [x, y] = [A.length, B.length];

for(let i = 0; i < x; i++) {
    const char = A[i];
    for(let j = 0; j < y; j++) {
        if(char === B[j]) {
            memo[i + 1][j + 1] = memo[i][j] + 1;
        } else {
            memo[i + 1][j + 1] = Math.max(memo[i][j + 1], memo[i + 1][j]);
        }
    }
}

console.log(memo[x][y]);