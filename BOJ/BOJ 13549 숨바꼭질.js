/**
 * 수빈이는 동생과 숨바꼭질을 하고 있다.
 *
 * 현재 점 N(0 ≤ N ≤ 100,000)에 있고, 동생은 점 K(0 ≤ K ≤ 100,000)에 있다.
 *
 * 수빈이는 걷거나 순간이동을 할 수 있다.
 *
 * 만약, 수빈이의 위치가 X일 때 걷는다면 1초 후에 X-1 또는 X+1로 이동하게 된다.
 *
 * 수빈이와 동생의 위치가 주어졌을 때, 수빈이가 동생을 찾을 수 있는 가장 빠른 시간이 몇 초 인지 구하는 프로그램을 작성해.
 *
 * 입력
 *
 * - 첫 번째 줄에 수빈이가 있는 위치 N과 동생이 있는 위치 K가 주어진다.
 * - N과 K는 정수이다.
 *
 * 출력
 *
 * 수빈이가 동생을 찾는 가장 빠른 시간을 출력 해.
 */
const [N, K] = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split(' ');

const MAX_LENGTH = 100000;

function solution() {
  let result = -1;
  const isVisited = new Array(100002).fill(false);
  const needVisit = [[Number(N), 0]];

  isVisited[N] = true;

  while (needVisit.length) {
    const [curPos, curTime] = needVisit.shift();

    if (curPos === Number(K)) {
      result = curTime;
    }

    const nextPositions = [
      [curPos * 2, 0],
      [curPos - 1, 1],
      [curPos + 1, 1],
    ];

    for (let nextPosInfo of nextPositions) {
      const [nextPos, nextTime] = nextPosInfo;

      if (nextPos >= 0 && nextPos <= MAX_LENGTH && !isVisited[nextPos]) {
        isVisited[nextPos] = true;

        needVisit.push([nextPos, curTime + nextTime]);
      }
    }
  }
  return result;
}

console.log(solution());
