const input = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim();

let [prev, answer] = ['', 0];
const stack = [];

input.split('').forEach(char => {
  if (char === '(') stack.push(char);
  else if (char === ')') {
    stack.pop();

    answer += prev === '(' ? stack.length : 1;
  }

  prev = char;
});

console.log(answer);
