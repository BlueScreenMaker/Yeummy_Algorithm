const input = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim();
let num = parseInt(input);
let count = 0;
let time = 0;

while (num > 0) {
    if (count + 1 > num) {
        count = 1;
    } else {
      count += 1;
    }

    num -= count;
    time += 1;

}

console.log(time);