function solution(dartResult) {
    const numbers = [];
    const options = { 'S': 1, 'D': 2, 'T': 3, '*': 2, '#': -1 };

    for (let i = 0, length = dartResult.length; i < length; i++) {
        const idx = numbers.length - 1;
        const cur = dartResult[i];

        if (!Number.isNaN(Number(cur))) {

            if (Number(cur) === 1 && Number(dartResult[i + 1]) === 0) {
                numbers.push(10);
                i += 1;
                continue;
            }
            numbers.push(Number(cur));
        } else if (cur === 'S' || cur === 'D' || cur === 'T') {
            const multi = options[cur];

            numbers[idx] = numbers[idx] ** multi;
        } else if (cur === '*' || cur === '#') {
            const option = options[cur];

            if (cur === '*') {
                if (idx !== 0) numbers[idx - 1] = numbers[idx - 1] * option;

                numbers[idx] = numbers[idx] * option;

                continue;
            } 

            if (cur === '#') {
                numbers[idx] = numbers[idx] * option;
            }
        }
    }

    return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution("1S2D*3T") === 37);
console.log(solution("1D2S#10S") === 9);
console.log(solution("1D2S0T") === 3);
console.log(solution("1S*2T*3S") === 23);
console.log(solution("1D#2S*3S") === 5);
console.log(solution("1T2D3D#") === -4);
console.log(solution("1D2S3T*") === 59);