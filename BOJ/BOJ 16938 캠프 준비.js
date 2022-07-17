/**
 * 알고리즘 캠프를 열려면 많은 준비가 필요하다.
 *
 * 그 중 가장 중요한 것은 문제이다.
 *
 * 오늘은 백준이를 도와 알고리즘 캠프에 사용할 문제를 고르려고 한다.
 *
 * 캠프에 사용할 문제는 두 문제 이상이어야 한다.
 *
 * 문제가 너무 어려우면 학생들이 맨붕에 빠지고 문제가 너무 쉬우면 학생들이 실망에 빠지게 된다.
 *
 * 따라서, 문제 난이도의 합은 L보다 크거나 같고, R보다 작거나 같아야 한다. ( L은 쉬운 문제의 난이도 정도, R은 어려운 문제의 난이도 정도 )
 *
 * 또, 다양한 문제를 경험해보기 위해 가장 여려운 문제와 가장 쉬운 문제의 난이도 차이는 X 보다 크거나 같아야 한다. ( L - R >= X)
 *
 * 캠프에 사용할 문제를 고르는 방법의 수를 구해보자.
 *
 *
 * ------------------------ 정리 ------------------------
 *
 * L <= 문제의 합 <= R && L - R >= X
 *
 */

const [condition, value] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, L, R, X] = condition.split(' ').map(Number);
const quizs = value.split(' ').map(Number);
let ans = 0;

function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map(v => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map(v => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

for (let i = 2; i <= N; i++) {
  const cases = combination(quizs, i);

  cases.forEach(caseArr => {
    const min = Math.min(...caseArr);
    const max = Math.max(...caseArr);

    if (max - min >= X) {
      const sum = caseArr.reduce((acc, cur) => acc + cur);
      if (sum >= L && sum <= R) ans++;
    }
  });
}

console.log(ans);
