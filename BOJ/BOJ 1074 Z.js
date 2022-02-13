const input = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim();
const [size, targetX, targetY] = input.split(' ').map(i => parseInt(i));
let ans = 0;

function Z(x, y, size) {
    if (x === targetX && y === targetY) {
        console.log(ans);
        return;
    }
    
    if ((x <= targetX && x + size > targetX) && (y <= targetY && y + size > targetY)) {
        Z(x, y, size / 2);
        Z(x, y + size / 2, size / 2);
        Z(x + size / 2, y, size / 2);
        Z(x + size / 2, y + size / 2, size / 2);
    } else {
        ans += size ** 2;
    }
}

Z(0, 0, 2 ** size);