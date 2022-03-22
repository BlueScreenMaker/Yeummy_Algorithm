const [num, ...arr] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const N = Number(num);
const candys = Array.from(Array(N), () => new Array(N).fill('A'));
let answer = 0;

function check() {
    let curAns = 1;

    for (let i = 0; i < N; i++) {
        let count = 1;
        for (let j = 1; j < N; j++) {
            if (candys[i][j] === candys[i][j - 1]) count += 1;
            else count = 1;

            if (count > curAns) curAns = count;
        }
        count = 1;

        for (let j = 1; j < N; j++) {
            if (candys[j][i] === candys[j - 1][i]) count += 1;
            else count = 1;

            if (count > curAns) curAns = count;
        }
    }
    return curAns;
}

for (let i = 0; i < N; i++) {
    const candy = arr[i].split('');
    for (let j = 0; j < N; j++) {
        candys[i][j] = candy[j];
    }
}

for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
        if (y + 1 < N) {
            [candys[x][y], candys[x][y + 1]] = [candys[x][y + 1], candys[x][y]];

            const num = check();

            if (num > answer) answer = num;

            [candys[x][y], candys[x][y + 1]] = [candys[x][y + 1], candys[x][y]];
        }

        if (x + 1 < N) {
            [candys[x][y], candys[x + 1][y]] = [candys[x + 1][y], candys[x][y]];

            const num = check();

            if (num > answer) answer = num;

            [candys[x][y], candys[x + 1][y]] = [candys[x + 1][y], candys[x][y]];
        }
    }
}

console.log(answer);