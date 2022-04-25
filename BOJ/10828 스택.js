const start = new Date();

function Stack() {
    const stack = [];

    this.size = () => stack.length;
    this.top = () => this.size() ? stack[this.size() - 1] : -1;
    this.empty = () => stack.length ? 0 : 1;
    this.push = (value) => stack.push(value);
    this.pop = () => this.size() ? stack.pop() : -1;
}

const input = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const ans = [];
const stack = new Stack();

for (let i = 0; i < N; i++) {
    const method = input[i];

    if (/push/.test(method)) {
        const [_, num] = method.split(' ');
        stack.push(Number(num));
        continue;
    }

    ans.push(stack[method]());
}


console.log((ans.join('\n')));
