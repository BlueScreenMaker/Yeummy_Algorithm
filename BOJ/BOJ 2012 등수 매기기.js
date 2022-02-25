const [_, ...temp] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
console.log(temp.map(Number).sort((a, b) => a - b).reduce((acc, cur, idx) => acc += Math.abs(cur - (idx + 1)), 0));
