// const input = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const input = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
let count = 0;
let sentence = input[0];
const target = input[1];
const length = target.length;

while(sentence.includes(target)) {
    const idx = sentence.indexOf(target);
    sentence = sentence.slice(idx+length);
    count += 1;
}
console.log(count);