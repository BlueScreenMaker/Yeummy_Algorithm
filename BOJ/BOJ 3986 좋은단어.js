const [N, ...inputs] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');

let answer = 0;

for (let i = 0, length = Number(N); i < length; i++) {
  const stack = [];
  const word = inputs[i].split('');

  for (let j = 0, length = word.length; j < length; j++) {
    if (stack.length !== 0) {
      const top = stack[stack.length - 1];

      if (top === word[j]) stack.pop();
      else stack.push(word[j]);
      continue;
    }

    stack.push(word[j]);
  }

  if (stack.length === 0) answer++;
}

console.log(answer);
