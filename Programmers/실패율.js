function solution(N, stages) {
    const result = [];
    const orderedStages = stages.sort((a, b) => a - b);

    for (let i = 1; i <= N; i++) {
        let [staging, staged] = [0, 0];
        for (let j = 0, length = orderedStages.length; j < length; j++) {
            if (i <= orderedStages[j]) {
                staged += 1;
                if (i === orderedStages[j]) staging += 1;
            }
        }
        result.push([i, (staging / staged)]);
    }

    return (result.sort((a, b) => {
        if (a[1] === b[1]) return  a[0] - b[0];
        return b[1] - a[1];
    }).map((res) => res[0]));
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4,4,4,4,4]));