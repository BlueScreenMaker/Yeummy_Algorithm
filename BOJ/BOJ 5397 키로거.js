// const input = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let num = input.splice(0, 1);
let idx = 0;
const loggers = input.map((logger) => logger.split(''));

while (num > 0) {
    const left = [];
    const right = [];

    loggers[idx].forEach((logger) => {
        switch (logger) {
            case '<':
                if (left.length > 0)
                    right.push(left.pop());
                break;
            case '>':
                if (right.length > 0)
                    left.push(right.pop());
                break;
            case '-':
                if (left.length > 0)
                    left.pop();
                break;
            default:
                left.push(logger);
                break;
        }
    });
    num--;
    idx++;
    console.log(left.join('') + right.reverse().join(''));
}