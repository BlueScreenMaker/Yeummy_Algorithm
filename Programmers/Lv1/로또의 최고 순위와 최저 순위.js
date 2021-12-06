function solution(lottos, win_nums) {
    const LENGTH = lottos.length;
    let maxCount = 0;
    let minCount = 0;

    for (let i = 0; i < LENGTH; i++) {
        const index = win_nums.indexOf(lottos[i]);
        if (index >= 0) {
            maxCount++;
            minCount++;
        } else if (lottos[i] === 0) maxCount++;

        if (index >= 0) win_nums.splice(index, 1);
    }

    const setLank = num => (num > 1 ? 7 - num : 6);

    return [setLank(maxCount), setLank(minCount)];
}

// lottos = [44, 1, 0, 0, 31, 25];
// win_nums = [31, 10, 45, 1, 6, 19];

lottos = [0, 0, 0, 0, 0, 0];
win_nums = [38, 19, 20, 40, 15, 25];

// lottos = [45, 4, 35, 20, 3, 9];
// win_nums = [20, 9, 3, 45, 4, 35];

console.log(solution(lottos, win_nums));
