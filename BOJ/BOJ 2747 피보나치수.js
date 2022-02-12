const input = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim();

const arr  = new Array(46).fill(null);
arr[0] = 0;
arr[1] = 1;
arr[2] = 1;

function fibo(n) {
    if (arr[n] === null) {
        arr[n] = fibo(n - 1) + fibo(n - 2);
    }
    return arr[n];
}

console.log(fibo(parseInt(input)))