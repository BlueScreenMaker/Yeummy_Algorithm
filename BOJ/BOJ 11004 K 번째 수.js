const input = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const [_, K] = input[0].split(' ');
console.log(input[1].split(' ').map(i => parseInt(i)).sort((a, b) => a - b)[K - 1]);