const input = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input.splice(0, 1)[0]);
const stack = [];
const answer = [];
let currentValue = 0;
let idx = 0;
let isValid = true;

while (idx < N) {
    const top = stack[stack.length - 1];
    const inputValue = parseInt(input[idx]);

    // top이 비어 있거나, top이 넣을 입력된 값보다 작을 때
    if (!top || top < inputValue) {
        ++currentValue;
        stack.push(currentValue);
        answer.push('+');

        continue;
    }

    // top과 넣을 입력된 값과 같을 때
    if (top === inputValue) {
        stack.pop();
        answer.push('-');
        ++idx;

        continue;
    }

    // 위 조건 모두가 아니라면 No.
    console.log('NO');
    isValid = false;
    break;
}

if (isValid) {
    answer.forEach(ans => console.log(ans))
}