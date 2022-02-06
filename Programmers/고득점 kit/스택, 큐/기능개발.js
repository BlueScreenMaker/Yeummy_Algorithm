function solution(progresses, speeds) {
    const answer = [];
    const workDays = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let prev = workDays[0];
    let count = 0;

    workDays.forEach((workDay) => {
        if (prev >= workDay) {
            count += 1;
            return;
        }
        if (prev < workDay) {
            answer.push(count);
            count = 1;
            prev = workDay;
            return;
        }   
    });
    answer.push(count);
    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]) === [2, 1])