const [start, target] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split(' ').map(Number);
const [MIN, MAX] = [0, 100000];
const [needVisit, visited] = [[[0, start]], Array(MAX + 1).fill(false)];


const isValid = (value) => {
    if (value < MIN || value > MAX || visited[value]) return false;
    return true;
}

while (needVisit.length >= 0) {
    const [count, value] = needVisit.shift();

    if (value === target) {
        console.log(count);
        return;
    }

    if (isValid(value - 1)) {
        visited[value - 1] = true;
        needVisit.push([count + 1, value - 1]);
    }
   
    if (isValid(value + 1)) {
        visited[value + 1] = true;
        needVisit.push([count + 1, value + 1]);
    }

    if (isValid(value * 2)) {
        visited[value * 2] = true;
        needVisit.push([count + 1, value * 2]);
    }
}
