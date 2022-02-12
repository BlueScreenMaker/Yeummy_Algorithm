// const input = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const input = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const _ = input.shift();
let ans = '';

const locations = input.map((i) => {
    const parse = i.split(' ');
    return [parseInt(parse[0]), parseInt(parse[1])];
})

locations.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
});

locations.forEach(location => ans += `${location[0]} ${location[1]} \n`);

console.log(ans);