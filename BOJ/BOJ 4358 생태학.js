/**
 * 생태학엣 나무의 분포도를 측정하는 것은 중요하다.
 *
 * 그러므로 당신은 미국 전역의 나무들이 주어졌을 때, 각 종이 전체에서 몇 %를 차지하는지 구하는 프로그램을 만들어야 한다.
 *
 * 프로그램은 여러 줄로 이루어져 있으며, 한 줄에 하나의 나무 종 이름이 주어진다.
 *
 * 어떤 종 이름도 30글자를 넘지 않으며, 입력에는 최대 10,000개의 종이 주어지고 최대 1,000,000그루의 나무가 주어진다.
 */

const input = require('fs')
  .readFileSync(__dirname + '/example.txt')
  .toString()
  .trim()
  .split('\n');

const LENGTH_OF_SPECIES = input.length;
// 이렇게 중복을 줄일 수 있다.
const uniqueSecies = [...new Set(input)].sort();
// 중복을 줄인 것을 Map으로 만들어 초기값으로 설정한다.
const spices = new Map(uniqueSecies.map(spice => [spice, 0]));
// Map을 순회하면서 set을 한다.
input.forEach(spice => spices.set(spice, spices.get(spice) + 1));
// Map을 순회하면서 퍼센테이지를 출력한다.
for (const [spice, count] of spices) {
  console.log(`${spice} ${((count / LENGTH_OF_SPECIES) * 100).toFixed(4)}`);
}
