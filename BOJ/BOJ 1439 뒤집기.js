let S = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim();
let [zero, one, prev] = [0, 0, ''];

if (S[0] === '0') {
    zero += 1;
    prev = '0';
}
else {
    one += 1;
    prev = '1';
}

for (let i = 1, length = S.length; i < length; i++) {
    if (prev !== S[i] && S[i] === '0') {
        prev = '0';
        zero += 1;

        continue;
    }

    if (prev !== S[i] && S[i] === '1') {
        prev = '1';
        one += 1;

        continue;
    }
}

console.log((Math.max(zero, one) !== 1 || zero == one)? Math.min(zero, one): 0);