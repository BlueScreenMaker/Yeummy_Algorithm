const [N, K, lo] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const location = lo.split(' ').map(Number).sort((a, b) => a - b);
const dist = [];

for (let i = 1, length = location.length; i < length; i++) {
    dist.push(location[i] - location[i - 1]);
}

console.log(
    dist.sort((a, b) => a - b)
        .splice(0, (+N - +K))
        .reduce((acc, cur) => acc + cur, 0));