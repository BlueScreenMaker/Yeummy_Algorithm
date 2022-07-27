/**
 * 그랩시에는 0으로 된 도로에 숫자 블록을 설치하기로 함.
 *
 * 숫자 블록의 규칙은 다음과 같다.
 *
 * 블록의 번호가 n이면, 가장 처음 블록은 n * 2번째 위치에 설치함.
 *
 * 가장 처음 블록은 n * 2번째 위치에 설치합니다. 그다음은 n * 3, 그다음은 n * 4, ...로
 *
 * 만약, 기존 블록이 깔려 있는 자리라면 그 블록을 빼고 새로운 블록으로 집어넣는다.
 *
 * 그랩시는 길이가 1,000,000,000인 도로에 1번 블록부터 시작하여 10,000,000번 블록까지 위의 규칙으로 모두 놓았습니다.
 *
 * 그랩시의 시장님은 특정 구간의 어떤 블록이 깔려 있는지 알고 싶다.
 *
 * 구간을 나타내는 두 수 begin, end가 매개 변수로 주어질 때, 그 구간에 깔려 있는 블록의 숫자 배열을 return 하도록 solution 함수를 완성하세요.
 */

function isDivisor(n) {
  for (let i = Math.sqrt(n); i > 1; i--) {
    if (i <= 10 ** 7 && n !== i && n % i === 0) return i;
  }

  return 1;
}

function solution(begin, end) {
  const answer = [];

  for (let i = begin; i <= end; i++) {
    if (i === 1) {
      answer.push(0);
      continue;
    }

    answer.push(isDivisor(i));
  }

  return answer;
}
console.log(solution(1, 10));
console.log(solution(999999990, 1000000000));
