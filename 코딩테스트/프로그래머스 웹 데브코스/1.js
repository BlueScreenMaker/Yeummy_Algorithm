function solution(k, m, names, amounts) {
    var answer = 0;
    let [prev, count, isSend] = [null, 0, false];

    for (let i = 0, length = names.length; i < length; i++) {
        if (prev && prev === names[i].toLowerCase()) count += 1;
        else if (!prev || prev !== names[i].toLowerCase()) count = 1;

        if (amounts[i] >= m) isSend = true;
        if (count >= k) isSend = true;

        if (isSend) answer += 1;

        prev = names[i].toLowerCase();
        isSend = false;
    }

    return answer;
}


console.log(solution(3, 50000, ["msLEE", "jsKim", "jsKIM", "jskiM", "jskim", "John", "john", "John", "msLEE", "msLEE", "jsKIM", "roy"], [950, 52524, 1400, 6055, 10000, 4512, 512, 52000, 9000, 49000, 1400, 50000]) === 5);
console.log(solution(2, 3451, ["abcd", "aBCd", "jsKIM", "rrr", "rrr"], [950, 1000, 1400, 4000, 10000]) === 3);
