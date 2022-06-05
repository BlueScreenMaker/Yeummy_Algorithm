const [N, ...inputs] = require('fs')
    .readFileSync(__dirname + '/example.txt')
    .toString()
    .trim()
    .split('\n');
const data = inputs.map(Number);
const stack = [];
let ans = 0;

for (let i = 0; i < N; i++) {
    while (stack.length && stack[stack.length - 1] <= data[i]) {
        stack.pop();
    }

    stack.push(data[i]);
    ans += stack.length - 1;
}

console.log(ans);
