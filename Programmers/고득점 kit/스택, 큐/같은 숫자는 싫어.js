/**
 * 배열 arr가 주어진다.
 *
 * 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있다.
 *
 * 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
 *
 * 단, 제거된 후 남은 수들을 반환할 대는 배열 arr의 원소들의 순서를 유지해야 합니다.
 */

// function solution(arr) {
//   return arr.reduce(
//     (acc, cur) => {
//       const prevTop = acc[acc.length - 1];

//       if (prevTop !== cur) return [...acc, cur];

//       return acc;
//     },
//     [arr[0]]
//   );
// }

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1], [1, 3, 0, 1]));
console.log(solution([4, 4, 4, 3, 3], [4, 3]));
