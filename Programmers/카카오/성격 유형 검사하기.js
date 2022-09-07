/**
 * 
 * 나만의 카카오 성격 유형 검사지를 만드려고 한다.
 * 
 * 성격은 4개 지표로 성격 유형을 구분한다.
 * 
 * 그리고 총 각 조합은 16가지이다.
 * 
 * 검사지에는 총 n개의 질문이 있고, 각 질문에는 아래와 같은 7개의 선택지가 있다.
 * 
 * 동의는 어피치형 비동의는 네오형
 * 
 */

function solution(survey, choices) {
    const selection = new Map([
        ['A', 0],
        ['C', 0],
        ['F', 0],
        ['J', 0],
        ['M', 0],
        ['N', 0],
        ['R', 0],
        ['T', 0],
    ]);
    let answer = '';

    survey.forEach((s, idx) => {
        const [negative, positive] = s.split('');
        const num = choices[idx];

        if (num === 4) return;
       
        if (num < 4) {
            const currentNum = selection.get(negative) === 0 ? 0 : selection.get(negative);

            selection.set(negative, currentNum + Math.ceil(3 / num));

            return;
        }

        if (num > 4) {
            const currentNum = selection.get(positive) === 0 ? 0 : selection.get(positive);

            selection.set(positive, currentNum + (num % 4));

            return;
        }
    });


    answer += selection.get('R') >= selection.get('T') ? 'R' : 'T';
    answer += selection.get('C') >= selection.get('F') ? 'C' : 'F';
    answer += selection.get('J') >= selection.get('M') ? 'J' : 'M';
    answer += selection.get('A') >= selection.get('N') ? 'A' : 'N';

    return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
