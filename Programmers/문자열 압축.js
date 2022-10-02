function getStr(str, count) {
    return count > 1 ? `${count}${str}` : str;
}

function solution(s) {
    let answer = Infinity;
    const LENGTH = s.length;

    if (LENGTH <= 2) return LENGTH;
    
    for (let i = Math.trunc(LENGTH / 2); i > 0; i--) {
        const slicedStr = s.replace(new RegExp(`(.{${i}})`, 'g'), '$1 ').trim().split(' ');
        let [tempStr, curStr, count] = ['', '', 0];

        slicedStr.forEach((str) => { 
            if (tempStr === str) {
                count++;
                return;
            }

            if (tempStr !== str) { 
                curStr = curStr + getStr(tempStr, count);
                count = 0;
            }
            
            tempStr = str;
            count += 1;
        });

        curStr = curStr + getStr(tempStr, count);

        answer = Math.min(answer, curStr.length);
    }

    return answer;
}

console.log(solution("aabbaccc"));
