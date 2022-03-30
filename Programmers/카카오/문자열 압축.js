/**
 * 문자열에서 같은 값이 연속해서 나타나는 것을 더 짧은 문자열로 줄여 표현하는 알고리즘
 * 
 * aabbaccc -> 2a2ba3c로 압축
 * 
 * 이때 가장 짧게 압축해 표현하고 문자열의 길이를 반환
 * 
 * aabbaccc -> 2a2ba3c -> 7
 * ababcdcdababcdcd -> 2ababcdcd  
 * abcabcdede -> 2abcdede
 * abcabcabcabcdededededede -> 2abcabc2dedede
 * xababcdcdababcdcd -> xababcdcdababcdcd -> 14
 */


/**
 * 이걸 어떻게 풀어내야 할까?
 * 
 * 문자열의 길이가 10000개 그럼 나눌 수 있는 것은 최대 500개?
 * 
 * 그럼 문자열이 aaabbb가 있다고 할 때
 * 
 * 최대 s.length / 2까지.. 즉, 최대 3개까지 나눌 수 있다.
 * 
 * 1. 문자열을 모두 다 배열로 분해한다.
 * 2. 앞에것과 뒤에것이 같으면 해당 카운트, 만약 다르면 이전에 문자 길이 더해준다.
 */

function solution(s) {
    let answer = Infinity;
    const strs = s.split('');
    const result = [];

    for (let i = 1, length = s.length; i <= length / 2; i++) {
        const parseArr = [];

        for (let j = 0, length = s.length; j < length; j += i) {
            parseArr.push(strs.slice(j, j + i).join(''));
        }
        // 앞에에 것과 같으면 +1 앞에것과 다르면 1
        // 첫번째 문자열을 저장한다.
        // 그러니까 다를때 해당 문자열을 저장하고 현재까지 저장된 카운트를 문자열과 합친다.
        // 단, 1이면 그냥 문자만 반환한다.
        // 아 문저열을 저장해야 한다. 이유는 숫자 갯수도 카운트를 해야되기 때문에
        // 2


        let prevStr = parseArr[0];
        let strCount = 0;
        const temp = [];

        for (let k = 0, length = parseArr.length; k < length; k++) {
            if (parseArr[k] === prevStr) {
                strCount += 1;
                continue;
            }

            if (parseArr[k] !== prevStr) {
                if (strCount === 1) temp.push(`${prevStr}`);
                else temp.push(`${strCount}${prevStr}`);
                prevStr = parseArr[k];
                strCount = 1;
            }
        }

        // 마지막 결괏값을 추가하지 못했으므로 그것을 추가한다.
        if (strCount === 1) temp.push(`${prevStr}`);
        else temp.push(`${strCount}${prevStr}`);

        result.push(temp.join(''));
    }

    result.forEach(re => answer = Math.min(answer, re.length));
    return (s.length !== 1)? answer: 1;
}

console.log(solution("a") === 1);

// console.log(solution("aabbaccc") === 7);
// console.log(solution("ababcdcdababcdcd") === 9);
// console.log(solution("abcabcdede") === 8);
// console.log(solution("abcabcabcabcdededededede") === 14);
// console.log(solution("xababcdcdababcdcd") === 17);