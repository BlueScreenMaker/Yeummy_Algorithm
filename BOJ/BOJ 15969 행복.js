const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

rl.on('line', (input) => {
    inputs.push(input);
}).on('close', () => {
    const N = Number(inputs[0])
    const score = inputs[1].split(" ").map(Number).sort((a, b) => a - b);

    console.log(score[N - 1] - score[0]);

    process.exit(0);
});
