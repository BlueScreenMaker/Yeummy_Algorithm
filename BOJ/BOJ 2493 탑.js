const [N, input] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const topList = input.split(' ').map(Number);
let ans = '';

for (let i = Number(N) - 1; i > 0; i--) {
    const target = topList[i];
    
    for (let j = i - 1; j >= 0; j--) {
        
        if (topList[j] >= target) {
            ans = `${j + 1} ${ans}`;
            break;
        }
        
        if (j === 0) {
            ans = `${0} ${ans}`;
        }
    }
}

console.log(`0 ${ans}`);
