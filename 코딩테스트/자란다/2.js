/**
 * 다음과 같이 IPv4 형식의 주소를 처리하는 간단한 API를 구현하려 합니다.
 *
 * API는 각 IP 주소가 서버에 등록 되어 있는 지 혹은 차단된 IP인지 등을 처리해야 하며, API를 호출한 곳으로 응답 코드를 보내야 합니다.
 *
 * + 문자열 형태로, 0부터 255까지의 숫자를 4 개를 '.'을 이용해 구분해서 표현합니다.
 *
 * + 0을 제외한 다른 숫자는 0으로 시작하지 않습니다.
 *
 * 처리해야 할 IP가 담긴 배열 (ip_address)
 * 서버에 등록된 IP 주소가 담긴 배열 (refistered_list)
 * 차단된 IP 주소들이 담긴 배열 (banned_list)
 *
 * 상태 코드를 반환하라
 *
 * --- 풀이 --
 *
 * 1. .으로 split 한 기준 배열의 길이가 4개여야 된다.
 * 2. 각 요소는 0보다 크거나 같아야 하며, 255와 같거나 작아야 한다.
 * 3. 다른 숫자 앞에 0이 올 수 없다.
 *
 */

let startTime = performance.now();

function solution(ip_addresses, registered_list, banned_list) {
  const answer = ip_addresses.map(ip => {
    const ipArr = ip.split('.');

    if (ipArr.length !== 4 || ipArr.some(ip => ip === '' || +ip < 0 || +ip > 255)) return 1;

    const isValid = ipArr.every(
      ip => (ip.length > 1 && !ip.startsWith('0')) || (ip.length === 1 && +ip >= 0 && +ip <= 9)
    );
    if (!isValid) return 1;

    if (banned_list.includes(ip)) return 3;
    if (!registered_list.includes(ip)) return 2;

    return 0;
  });

  return answer;
}

solution(['115.86.56.15', '123.12.2.1.', '...', '255.255.1.256'], ['115.86.56.15'], ['123.12.2.1']);

let endTime = performance.now();

console.log(`${endTime - startTime} milliseconds`);

// solution(['115.86.56.15', '123.12.2.1.', '...', '255.255.1.256'], ['115.86.56.15'], ['123.12.2.1']);

// function solution(ip_addresses, registered_list, banned_list) {
//   const answer = Array.from(Array(ip_addresses.length), () => 0);
//   for (let i = 0; i < ip_addresses.length; i++) {
//     const ipAddress = ip_addresses[i];
//     if (!/^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/gm.test(ipAddress))
//       answer[i] = 1;
//     else if (banned_list.includes(ipAddress)) answer[i] = 3;
//     else if (!registered_list.includes(ipAddress)) answer[i] = 2;
//     else answer[i] = 0;
//   }

//   return answer;
// }
