let num = 1000 - Number(require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim());

const coinList = [500, 100, 50, 10, 5, 1];

let answer = 0;
let idx = 0;

while (num > 0) {
    const numCoin = parseInt(num / coinList[idx]);

    num -= coinList[idx] * numCoin;

    answer += numCoin;

    idx++
}

console.log(answer);