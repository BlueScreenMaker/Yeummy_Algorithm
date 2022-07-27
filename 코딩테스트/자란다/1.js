/**
 * 스마트폰 어플리케이션으로 공부한 시간을 기록하려한다.
 *
 * 시박 버튼 : 공부를 시작할 대의 시각을 기록
 * 중지 버튼 : 공부를 중지할 때의 시각을 기록
 *
 * 하지만, 어플리케이션에 기록된 시간에 할상 공부만 했다는 보장은 없다.
 *
 * 따라서, 규칙에 따라 실제로 공부한 시간을 구하려 한다.
 *
 * + 공부를 시작하고 5분이 지나기 전에 중지했다면 실제로 공부한 시간에 포함 X
 * + 공부를 시작하고 1시간 45분이 넘어서 중지했다면 1시간 45분 까지만 공부한 시간으로 인정
 *
 * 첨에 주어지는 것은 무조건 공부를 시작한 시간, 마지막 시간은 무조건 공부를 중지한 시각
 *
 * 시작 및 중지 시각을 반복적으로 주어진다.
 *
 * 실제로 공부한 시간을 반환하라
 *
 * ----- 풀이 -----
 *
 * 먼저 각 배열마다 2개씩 split 한다.
 *
 * 그리고 그 두 개에 대해 : 기준으로 split 하고 분에 따라 결과값을 반환한다.
 */

function solution(log) {
  let pointer = 0;
  let answer = 0;
  const MIN_TIME = 5;
  const MAX_TIME = 105;

  for (let i = 0, length = log.length; i < length / 2; i++) {
    const [start, end] = log.slice(pointer, pointer + 2).map(time => {
      const [hour, minute] = time.split(':');
      return parseInt(hour) * 60 + parseInt(minute);
    });

    pointer += 2;

    const studyTime = end - start;

    console.log(studyTime);

    if (studyTime < MIN_TIME) continue;

    answer += studyTime > MAX_TIME ? MAX_TIME : studyTime;
  }

  const calcucateHour = Math.floor(answer / 60);

  const hour = calcucateHour >= 10 ? calcucateHour : `0${calcucateHour}`;
  const minute = answer % 60 >= 10 ? answer % 60 : `0${answer % 60}`;

  return `${hour}:${minute}`;
}

// console.log(solution(['08:30', '09:00', '14:00', '16:00', '16:01', '16:06', '16:07', '16:11']));
console.log(solution(['01:00', '08:00', '15:00', '15:04', '23:00', '23:59']));
console.log(
  solution(['01:00', '08:00', '09:00', '14:00', '16:00', '16:01', '16:06', '16:07', '16:11', '17:59', '18:00', '19:59'])
);
