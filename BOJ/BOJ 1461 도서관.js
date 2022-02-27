const [num, lo] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const [N, M] = num.split(' ').map(Number);
const locations = lo.split(' ').map(Number);
const [negative, positive] = [[], []];
let MAX = 0;
let answer = 0;

locations.forEach((location) => {
    if (Math.abs(MAX) < Math.abs(location)) MAX = location;

    if (location < 0) {
        negative.push(location);
        return;
    }

    if (location > 0) {
        positive.push(location);
        return;
    }
});

negative.sort((a, b) => a - b);
positive.sort((a, b) => b - a);

for (let i = 0, length = negative.length; i < length; i += M) {
    if (negative[i] !== MAX) answer += Math.abs(negative[i]);
}

for (let i = 0, length = positive.length; i < length; i += M) {
    if (positive[i] !== MAX) answer += positive[i];
}

console.log((answer * 2) + Math.abs(MAX));