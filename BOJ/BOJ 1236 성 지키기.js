const input = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const [row, col] = input.shift().split(' ');
const matrix = input.map(i => i.split(''));
let [colNum, rowNum] = [0, 0];

for (let i = 0; i < row; i++) {
    if (!matrix[i].includes('X')) rowNum += 1;
}

for (let i = 0; i < col; i++) {
    let isNone = true;
    for (let j = 0; j < row; j++) {
        if (matrix[j][i] === 'X') {
            isNone = false;
            break;
        }
    }
    if (isNone) colNum += 1;
}

console.log(Math.max(colNum, rowNum));