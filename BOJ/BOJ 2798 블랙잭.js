
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

function findMax(combinations, M) {
    let answer = 0;

    combinations.forEach(combination => {
        const curValue = combination.reduce((acc, cur) => parseInt(acc) + parseInt(cur));

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