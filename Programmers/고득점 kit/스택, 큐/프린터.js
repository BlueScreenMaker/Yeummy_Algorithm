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

solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);
