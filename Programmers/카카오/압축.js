/**
 * 신입 사원 어피치는 카톡으로 전송되는 메시지를 압축하여 전송 효율을 높이는 업무를 맡게 되었다.
 * 
 * 메시지를 압축하더라도 전달되는 정보가 바쒸어서는 안 되므로, 압축 전 정보를 완벽하게 복원 가능한 무손실 압축 알고리즘을 구현하기로 했다.
 * 
 * 이를 위해 LZW 알고리즘을 사용하기로 했다.
 * 
 * LZW 압축은 다음 과정을 거친다.
 * 
 * 1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
 * 
 * 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
 * 
 * 3. w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
 * 
 * 4. 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
 * 
 * 5. 단계 2로 돌아간다.
 * 
 * 
 */

function solution(msg) {
    const answer = [];
    const splitedMsg = msg.split('');
    const dict = new Map();
    let answerIdx = 0;
    let lastIdx = 26;

    for (let i = 1; i <= 26; i++) 
        dict.set(String.fromCharCode(64 + i), i);
    
    
    for (let i = 0; i < splitedMsg.length; i++) { 
        let w = splitedMsg[i];

        for (let j = i; j < splitedMsg.length; j++) { 
            
            if (dict.has(w + splitedMsg[j + 1])) {
                let c = splitedMsg[j + 1];
                let cuurentIdx = dict.get(w + c);
                w += c;

                answer[answerIdx] = cuurentIdx;
                i++;

                continue;
            }

            answer[answerIdx++] = dict.get(w);
            dict.set(w + splitedMsg[j + 1], ++lastIdx);
            break;
        }
    }

    return answer;
}

console.log(solution("KAKAO"));
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
console.log(solution("ABABABABABABABAB"));
