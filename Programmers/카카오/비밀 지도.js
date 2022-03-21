function solution(n, arr1, arr2) {
    
    const answer = [];

    arr1 = arr1.map((a) => a.toString(2).padStart(n, '0'));
    arr2 = arr2.map((a) => a.toString(2).padStart(n, '0'));

    for (let i = 0; i < n; i++) {
        let result = '';
        for (let j = 0; j < n; j++) {
            
            if (arr1[i][j] === '0' && arr2[i][j] === '0') {
                result += ' ';
                continue;
            }

            result += '#';
        }
        answer.push(result);
    }

    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));