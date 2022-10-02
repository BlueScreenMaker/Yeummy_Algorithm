function solution(progresses, speeds) {
    const leftDays = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    let answer = [];
    let [pointDay, count, idx] = [leftDays[0], 0, 0];

    do {
        if (idx === leftDays.length) {
            answer.push(count);
            break;
        }

        const curDay = leftDays[idx];
    
        if (curDay > pointDay) {
            answer = [...answer, count];
            count = 1;
            pointDay = curDay;
        } else {
            count++;
        }

        idx++;
    } while (idx <= leftDays.length) 

    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
