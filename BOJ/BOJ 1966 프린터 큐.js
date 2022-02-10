function solution(priorities, location) {
    let answer = 0;
    // 초기 인덱스 값을 알아야 하기 때문에, 우선순위와 기존 인덱스 값을 저장한다.
    const schedules = priorities.map((priority, index) => [priority, index]);

    for (let i = 0; i < schedules.length; i++) {
        // 가장 최댓값을 알아야 하기 때문에 내림차순 정렬하고 가장 앞에 오는 것이 최댓값이 된다.
        const maxValue = [...schedules.slice(i)].sort((a, b) => b[0] - a[0])[0][0];
        // 지금 대상이 되는 스캐줄
        const [priority, index] = schedules[i];

        // 만약, 현재의 우선순위가 그 이후의 최댓값 보다 작다면 뒤로 보내야함.
        if (priority < maxValue) {
            // 가장 앞에 것을 제거하고
            schedules.splice(i, 1);
            // 넣는다.
            schedules.push([priority, index]);
            // 인덱스 역전이 일어날 수 있기 때문에 인덱스를 줄여줘야 한다.
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