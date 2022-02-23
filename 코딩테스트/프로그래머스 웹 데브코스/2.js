function solution(research, n, k) {
    let answer = '';
    let max = -1;
    const log = {};
    const result = {};

    for (let i = 0, length = research.length; i < length; i++) {
        for (let j = 0, length = research[i].length; j < length; j++) {
            if (!(research[i][j] in log)) {
                log[research[i][j]] = new Array(research.length).fill(0);
                result[research[i][j]] = 0;
            }
            
            log[research[i][j]][i] += 1;
        }
    }

    for (i in log) {
        let count = 0;
        
        for (let j = 0, length = log[i].length; j < length; j++) {
            const numLog = log[i][j];

            if (numLog >= k) count += 1;
            else count = 0;

            if (count >= n) {
                let sum = 0;
                const limit = 2 * n * k;
                const temp = log[i].slice(j - (n - 1), j + 1);
                
                if (temp.length >= n) {
                    sum = temp.reduce((prev, cur) => prev + cur);
                }

                if (sum >= limit) {
                    result[i] += 1;
                }
            }
        }
    }
    
    for (i in result) {

        if (result[i] !== 0 && result[i] > max) {
            max = result[i];
            answer = i;
        } else if (result[i] === max) {
            if (answer > i) answer = i;
        } 
    }

    return answer === ''? 'None': answer;
}

console.log(solution(["xy","xy"], 1, 1) === 'None');
console.log(solution(["yxxy","xxyyy","yz"], 2, 1) === 'y');
console.log(solution(["yxxy","xxyyy"], 2, 1) === 'x');
console.log(solution(["abaaaa","aaa","abaaaaaa","fzfffffffa"], 2, 2) === 'a');
