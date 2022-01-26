function solution(s) {
    const answer = [];
    const length = parseInt(s.length / 2);

    for (let i = 1; i <= length; i++) {
        target = s.slice(0, i);
        count = 0;
        strLength = 0;
        for (let j = 0; j < s.length; ++j + i) {
            compare = s.slice(j, i + j);

            if (target === compare) ++count;
            else {
                target = compare;
                strLength += i + String(count).length;
                count = 0;
            }
        }
        if (compare) {
            strLength += i + String(compare).length;
        }
        console.log(strLength);
    }

    console.log();

    return answer;
}

solution('aabbaccc');
