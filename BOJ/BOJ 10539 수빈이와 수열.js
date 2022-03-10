const [n, arr] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const [num, sequences, ans] = [Number(n), arr.split(' ').map(Number).reverse(), []];
let idx = num;

for (let i = 0, length = sequences.length; i < length - 1; i++){

    const sum = sequences[i] * idx;
    const prevSum = sequences[i + 1] * (idx - 1);

    --idx;
    ans.push(sum-prevSum);
}

ans.push(sequences[num - 1]);

console.log(ans.reverse().join(' '))