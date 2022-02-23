const [num, ...vol] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const [N, S, M] = num.split(' ').map(Number);
const volums = vol[0].split(' ').map(Number);
const memo = Array.from(Array(N + 1), ()=> Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
    for (let j = 0; j < M; j++) {
        if (!memo[i - 1][j]) { continue; }
        if (j - volums[i] >= 0) { memo[i][j - volums[i]] = true; } 
        if (j + volums[i] <= M) { memo[i][j + volums[i]] = true; }
    }
}
