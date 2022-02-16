const [num, ...stuffs] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const [N, K] = num.split(' ').map(e => parseInt(e));
const [dp, weight, value] = [[], [], []];

for (let i = 0; i < N; i++) {
    const [W, V] = stuffs[i].split(' ').map(i => parseInt(i));
    weight[i] = W;
    value[i] = V;
}

for (let i = 0; i <= N; i++) {
    dp[i] = [];
    for (let j = 0; j <= K; j++) {
        if (i == 0 || j == 0) {
            dp[i][j] = 0;
            continue;
        }
        
        if(weight[i - 1] > j) {
            dp[i][j] = dp[i - 1][j];
        }
        else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i - 1]] + value[i - 1]);
        }
    }
}

console.log(dp[N][K])