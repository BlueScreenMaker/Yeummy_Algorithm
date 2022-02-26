const [...inputs] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
inputs.shift();
const crane = inputs.shift().split(' ').map(Number).sort((a, b) => b - a);
const M = Number(inputs.shift());
const boxes = inputs.shift().split(' ').map(Number).sort((a, b) => b - a);
let numMovedBox = 0;
let answer = 0;
let isUnAble = false;

while (numMovedBox !== M) {
    let count = 0;

    for (let i = 0, length = crane.length; i < length; i++) {
        for (let j = 0, length = boxes.length; j < length; j++) {
            if (crane[i] >= boxes[j]) {
                count++;
                numMovedBox++;
                boxes.splice(j, 1);
                break;
            }
        }
    }

    if (count === 0) {
        isUnAble = true;
        break;
    }

    answer += 1;
}

console.log(isUnAble? -1: answer);