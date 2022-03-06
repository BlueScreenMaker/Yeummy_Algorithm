const [num, ...arr] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');

const [R, C] = num.split(' ').map(Number);
const alphabets = Array.from(Array(R), ()=> Array(C));
const stack = [];

function DFS(i, j, count) {

    
}

for (let i = 0; i < R; i++) {
    arr[i].split('').map((e, j) => {
        alphabets[i][j] = e;
    });
}
