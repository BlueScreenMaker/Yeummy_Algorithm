const [num, ...locs] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const [numHouse, numModem] = num.split(' ').map((e) => parseInt(e));
const locations = locs.map(loc => parseInt(loc)).sort((a, b) => a - b);
let [left, right, ans] = [1, locations[numHouse - 1] - locations[0], 0];

while (left <= right) {
    let [mid, prev, numSelHouse] = [Math.floor((left + right) / 2), locations[0], 1];

    for (let i = 1; i < numHouse; i++) {
        if (locations[i] - prev >= mid) {
            prev = locations[i];
            ++numSelHouse;
        }
    }

    if (numSelHouse >= numModem) {
        ans = Math.max(mid, ans);
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
console.log(ans);