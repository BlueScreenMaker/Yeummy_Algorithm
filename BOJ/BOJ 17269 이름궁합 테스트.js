const [num, names] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const [N, M] = num.split(' ').map(Number);
const [A, B] = names.split(' ');

const ans = [3,2,1,2,4,3,1,2,1,1,3,1,3,2,1,2,2,2,1,2,1,1,1,2,2,1];

