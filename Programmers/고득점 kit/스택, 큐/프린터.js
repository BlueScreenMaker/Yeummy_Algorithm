/**
 * 일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄한다.
 *
 * 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있다.
 *
 * 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다.
 *
 * 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.
 *
 * 1. 인쇄 대기목록의 가장 앞에 있는 문서 J를 대기 목록에서 꺼낸다.
 * 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재한다면, J를 대기 목록의 가장 마지막에 넣는다.
 * 3. 그렇지 않으면 J를 인쇄한다.
 *
 *
 */

function solution(priorities, location) {
  let locString = null;
  const CHAR_A = 65;

  const data = priorities.map((v, i) => {
    const char = String.fromCharCode(CHAR_A + i);
    if (i === location) locString = char;

    return [char, v];
  });

  for (let i = 0; i < data.length; i++) {
    const [_, value] = data[i];
    const isMaxPriority = data.slice(i + 1).every(([, v]) => v <= value);

    if (isMaxPriority) continue;

    data.push(data.splice(i, 1)[0]);
    i--;
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === locString) return i + 1;
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
