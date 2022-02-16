const length = parseInt(require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim())

for (let i = 3, memo = [0, 1, 2]; i <= length; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;

    if (i === length) console.log(memo[length]);
}
