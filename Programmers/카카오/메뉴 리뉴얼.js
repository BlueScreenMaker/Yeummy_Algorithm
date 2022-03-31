/**

메뉴 리뉴얼을 하고자 함.

기존의 메뉴를 조합 후, 코스 요리로 재구성 하려 함.

이전에 손님들이 주문시, 가장 많이 함께 주문한 단품 메뉴를 코스요리 메뉴로 구성하기로 함.

단 코스 요리 메뉴는 최소 2가지 이상의 단품 메뉴로 구성하려 함

최소 2명 이상의 손님으로 부터 주문된 단품 메뉴 조합에 대해서만 코스요리 매뉴후보에 포함
-> 즉, 주문 횟수는 2 이상인 것으로 구성해야 한다.

각 손님은 단품메뉴를 2개 이상 주문해야 한다.

A, C가 동일하게 4번 중복되었음. -> A, C
C, D, E가 동일하게 3번 중복되었음. -> C, D, E
B, C, F, G가 동일하게 2번 중복되었음 -> B, C, G, F
A, C, D, E가 동일하게 2번 중복되었음 -> A, C, D, E


그래서 문제는 스카피가 추가하고 싶어하는 코스 요리를 구성하는 단품 메뉴의 갯수를 반환하라

그러니까, 메뉴가 2번 이상 반복된 것들의 매뉴를 반환하라

*/

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

function solution(orders, course) {
    const result = new Map();

    for (let i = 0, length = course.length; i < length; i++) {
        const menuNumber = course[i];
        for (let j = 0, length = orders.length; j < length; j++) {
            const menu = orders[j];
            
            if (menu.length >= menuNumber) {
                const menuCombination = combination(menu.split(''), menuNumber);
                
                for (let k = 0, length = menuCombination.length; k < length; k++) {
                    const combinatedMenu = menuCombination[k].sort().join('');

                    const isGet = result.get(combinatedMenu);

                    if (isGet) {
                        result.set(combinatedMenu, isGet + 1);
                        continue;
                    }

                    if (!isGet) {
                        result.set(combinatedMenu, 1);
                        continue;
                    }
                }
            }

        }
    }

    const sortedRes = [...result.entries()].sort((a, b) => b[1] - a[1]);

    const candidate = [];
    let textLength = new Array(10).fill(2);

    for (const menu of sortedRes) {
        const [name, count] = menu;

        if (textLength[name.length - 1] <= count) {
            textLength[name.length - 1] = count;

            candidate.push(name);
        } 
    }

    return candidate.sort();
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],[2, 3, 5]));
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
