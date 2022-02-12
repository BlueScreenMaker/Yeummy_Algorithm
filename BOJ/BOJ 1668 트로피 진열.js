const input = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
input.shift();
const trophys = input.map(i => parseInt(i));
const length = trophys.length;
let [left, right] = [0, 0]
let [leftMax, rightMax] = [-1, -1] 

for (let i = 0; i < length; i++) {

    if (leftMax < trophys[i]) {
        left += 1;
        leftMax = trophys[i];
    }

    if (rightMax < trophys[(length - 1) - i]) {
        right += 1;
        rightMax = trophys[(length - 1) - i];
    }
}

console.log(left, right);