/**
 * enroll: 각 판매원의 이름을 단은 배열
 * referral: 각 판매원을 다단계 조직에 첨여 시킨 다른 판매원의 이름을 담은 배열
 * seller: 판매량 집계 데이터의 판매원 이름을 나열한 배열
 * amount: 판매량 집계 데이터의 판매 수량을 나열한 배열 amount
 *
 * seller와 amount는 바인딩해서 보면 될 것 같음
 *
 * 각 수익 별로 for 문을 통해 반복한다.
 *
 * 해당 노드에 parent가 있으면, 해당 노드의 값에 10퍼센트를 parent값으로 반영한다.
 * 그리고 자기 자신을 10%에 해당 하는 값으로 반영한다.
 *
 * 이 과정을 루트에 도달할 때 까지 반복한다.
 *
 */

// function solution(enroll, referral, seller, amount) {
//   const parent = [];
//   const result = Array.from(Array(enroll.length), () => 0);

//   function calc(currentSeller, cost) {
//     // 현재 young의 인덱스
//     const currentSellerIdx = enroll.indexOf(currentSeller);

//     console.log(currentSellerIdx);

//     // young의 부모 인덱스
//     const parentIdx = parent[currentSellerIdx];

//     // young의 나눈 수익
//     const dividedCost = Math.floor(cost * 0.1);

//     if (!parentIdx) {
//       result[currentSellerIdx] += dividedCost > 0 ? cost - dividedCost : cost;

//       return;
//     }

//     if (dividedCost > 0) {
//       result[currentSellerIdx] += cost - dividedCost;

//       const parentName = enroll[parentIdx];

//       calc(parentName, dividedCost);
//     } else {
//       result[currentSellerIdx] += cost;
//       return;
//     }
//   }

//   for (let i = 0, length = enroll.length; i < length; i++) {
//     // 현재 판매원이 끌어드린 인원
//     const ref = referral[i];

//     if (ref === '-') parent[i] = 0;
//     else {
//       // 자신의 부모 인덱스를 찾는다.
//       const refIdx = enroll.indexOf(ref);
//       // 자신의 부모 인덱스를 반영한다.
//       parent[i] = refIdx;
//     }
//   }

//   for (let i = 0, length = seller.length; i < 1; i++) {
//     const curSeller = seller[i];

//     const cost = amount[i] * 100;

//     calc(curSeller, cost);
//   }

//   //   return result;
// }

function solution(enroll, referral, seller, amount) {
  let answer = Array(enroll.length).fill(0);

  for (let i = 0; i < seller.length; i++) {
    let currentName = seller[i];
    let currentPrice = amount[i] * 100;
    let sellerIndex = 0;
    let hasParent = true;
    for (let j = 0; j < enroll.length; j++) {
      if (enroll[j] === currentName) {
        sellerIndex = j;
      }
    }
    while (hasParent) {
      // 추천인이 존재하지 않을 때까지 금액의 10% 전달을 반복한다
      let addingValue = currentPrice - Math.floor(currentPrice * 0.1);
      answer[sellerIndex] += addingValue; // 금액의 10%를 제외한 금액은 판매자의 누적금액에 더한다
      if (referral[sellerIndex] === '-') {
        // 추천인이 존재하지 않는 경우
        hasParent = false;
      } else {
        // 추천인이 존재하면 금액의 10%를 추천인에게 전달한다
        currentName = referral[sellerIndex];
        currentPrice = Math.floor(currentPrice * 0.1);
        for (let j = 0; j < enroll.length; j++) {
          if (enroll[j] === currentName) {
            sellerIndex = j;
          }
        }
      }
    }
  }

  return answer;
}

console.log(
  solution(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['young', 'john', 'tod', 'emily', 'mary'],
    [12, 4, 2, 5, 10]
  )
);

// console.log(
//   solution(
//     ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
//     ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
//     ['sam', 'emily', 'jaimie', 'edward'],
//     [2, 3, 5, 4]
//   )
// );
