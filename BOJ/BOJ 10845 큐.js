const [N, ...inputs] = require('fs')
    .readFileSync(__dirname + '/example.txt')
    .toString()
    .split('\n');

const queue = [];
let ans = '';
for (let i = 0; i < N; i++) { 

    const input = inputs[i].split(' ');

    switch (input[0]) {
        case 'front':
            ans += `${queue.length ? queue[0] : -1}\n`;
            break;
        case 'back':
            ans += `${queue.length ? queue[queue.length - 1] : -1}\n`;
            break;
        case 'size':
            ans += `${queue.length}\n`;
            break;
        case 'empty':
            ans += `${queue.length ? 0 : 1}\n`;
            break;
        case 'pop':
            ans += `${queue.length ? queue.shift() : -1}\n`;
            break;
        default:
            queue.push(input[1]);
            break;
    }
}
console.log(ans);
