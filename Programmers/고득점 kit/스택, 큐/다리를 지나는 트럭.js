/**
 * 트럭 여러 대가 가로지르는 일차선 다리를 정해진 순으로 건너려 한다.
 *
 * 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 한다.
 *
 * 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며,
 *
 * 다리는 weight 이하의 무게를 견딜 수 있다.
 *
 * 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시한다.
 *
 * 예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다.
 *
 * 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
 *
 * --- 풀이 ---
 *
 * 다리의 길이가 존재한다.
 *
 * 다리를 모두 건너야만 다리를 건널 수 있다.
 *
 * 디리를 만들고 그 다리에 올라간 합을 비교해서 들어올 수 있는지 없는지를 판별한다.
 *
 * 끝날때는 모두가 들어왔으며, 모두가 다리를 건넜을 때 끝날 수 있다.
 */
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const bridge = Array.from(Array(bridge_length), () => 0);
  const sumOfBridgeWeight = array => array.reduce((acc, cur) => acc + cur, 0);

  while (bridge.length) {
    // bridge에 가장 앞에 있는 것을 일단 뺀다.
    bridge.shift();

    const currentSum = sumOfBridgeWeight([...bridge]);
    const currentTruckWeight = truck_weights.length;

    if (currentTruckWeight > 0) {
      // 이 말은 추가적으로 더 들어갈 것이 있다는 말.

      const nextTruckWeight = truck_weights[0];

      // 그럼 더이상 들어갈 수가 없음
      if (currentSum + nextTruckWeight > weight) bridge.push(0);
      else {
        // 들어갈 수 있다.
        bridge.push(nextTruckWeight);
        truck_weights.shift();
      }
    }
    // 이후 넣어주는것은 조건에 따라 처리한다.

    ++answer;
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
