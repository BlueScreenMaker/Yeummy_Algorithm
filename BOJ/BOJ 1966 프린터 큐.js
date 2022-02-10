function solution(priorities, location) {
    let answer = 0;
    const schedules = priorities.map((priority, index) => [priority, index]);

    for (let i = 0; i < schedules.length; i++) {
        const maxValue = [...schedules.slice(i)].sort((a, b) => b[0] - a[0])[0][0];
        const [priority, index] = schedules[i];

        if (priority < maxValue) {
            schedules.splice(i, 1);
            schedules.push([priority, index]);
            i -= 1;
        }
    }

    schedules.forEach((schedule, index) => {
        if (schedule[1] === location)
            answer = index;
    })

    return answer + 1;
}

// const input = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split("\n");
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [_, ...array] = input;

for (let i = 0; i < array.length; i += 2) {
    console.log(solution(array[i + 1].split(' ').map(e => parseInt(e)), parseInt(array[i].split(' ')[1])));
}