const [num, ...temp] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');

const [sequence, dp] = [[0, ...temp[0].split(' ').map(e => parseInt(e))], [0]];
let answer = 0;

for (let i = 1, length = parseInt(num); i <= length; i++) {
    maxLength = 0;
    for (let j = i - 1; j >= 0; j--) {
        if (sequence[i] > sequence[j]) maxLength = Math.max(maxLength, dp[j]);
    }
    dp[i] = maxLength + 1;
    answer = Math.max(answer, dp[i]);
}

console.log(answer);