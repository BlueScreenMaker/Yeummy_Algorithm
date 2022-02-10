// 조합을 만드는 함수
function combination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr.slice(idx + 1);
      const combinationArr = combination(restArr, selectNum - 1);
      const combineFix = combinationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });
    return result;
}
// 거기에서, 최댓값을 찾는 함수
function findMax(combinations, M) {
    let answer = 0;
    // 조합을 받고 나서 forEach로 순회한다.
    combinations.forEach(combination => {
        // 그리고 그 조합을 reduce로 sum을 구한다.
        const curValue = combination.reduce((acc, cur) => parseInt(acc) + parseInt(cur));
        
        // 현재 나온 값과 비교한다.
        // 현재 값이 answer보다 크거나, M이랑 가장 가까우면 초기화
        if (curValue > answer && curValue <= M) answer = curValue;
    })
    return answer;
}

// const input = require('fs').readFileSync("example.txt").toString().split("\n");
const input = require('fs').readFileSync("/dev/stdin").toString().split("\n");

const [_, M] = input[0].split(' ');
const cardList = input[1].split(' ');
const cardCombinations = combination(cardList, 3);

console.log(findMax(cardCombinations, M));