/**
 * 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다.
 * 
 * 1 + 1 + 1 + 1
 * 1 + 1 + 2
 * 1 + 2 + 1
 * 2 + 1 + 1
 * 2 + 2
 * 3 + 1
 * 
 * 일단, 가장 첫 번째로 들어 갈 수 있는 것은 해당 정수가 모두 1일 때이다.
 * 그래서 한 개씩 더해간다..?
 * 일단, 한 개씩 모두 해보자.
 * 
 * 1 -> - 1 ( 1 ) -
 * 
 * - 2 ( 2 ) -
 * 1 + 1
 * 
 * 2
 * 
 * - 3 ( 4 ) -
 * 
 * 1 + 1 + 1 ( 1 )
 * 
 * 2 + 1 ( 2 )
 * 1 + 2
 * 
 * 3
 * 
 * - 4 ( 7 ) -
 * 
 * 1 + 1 + 1 + 1 ( 1 )
 * 
 * 1 + 1 + 2 ( 3 )
 * 2 + 1 + 1
 * 1 + 2 + 1
 * 
 * 2 + 2 ( 1 )
 * 
 * 3 + 1 ( 2 )
 * 1 + 3 
 * 
 * - 5 ( 13 ) -
 * 1 + 1 + 1 + 1 + 1 ( 1 )
 * 
 * 2 + 1 + 1 + 1 ( 4 )
 * 1 + 2 + 1 + 1
 * 1 + 1 + 2 + 1
 * 1 + 1 + 1 + 2
 * 
 * 1 + 2 + 2 ( 3 )
 * 2 + 2 + 1
 * 2 + 1 + 2
 * 
 * 3 + 1 + 1 ( 3 )
 * 1 + 3 + 1
 * 1 + 1 + 3
 * 
 * 2 + 3 ( 2 )
 * 3 + 2
 * 
 * 
 * - 6 ( 24 ) - 
 * 1 + 1 + 1 + 1 + 1 + 1 
 * 
 * 2 + 1 + 1 + 1 + 1 ( 5 )
 * 1 + 2 + 1 + 1 + 1
 * 1 + 1 + 2 + 1 + 1
 * 1 + 1 + 1 + 2 + 1
 * 1 + 1 + 1 + 1 + 2
 * 
 * 2 + 2 + 1 + 1 ( 5 )
 * 1 + 2 + 2 + 1
 * 1 + 1 + 2 + 2
 * 2 + 1 + 1 + 2
 * 2 + 1 + 2 + 1
 * 
 * 3 + 1 + 1 + 1 ( 4 )
 * 1 + 3 + 1 + 1
 * 1 + 1 + 1 + 3
 * 1 + 1 + 3 + 1
 * 
 * 3 + 2 + 1 ( 6 )
 * 3 + 1 + 2
 * 1 + 3 + 2
 * 1 + 2 + 3
 * 2 + 3 + 1
 * 2 + 1 + 3
 * 
 * 
 * n - 1 + n - 2 + n - 3
 */

const [_, ...N] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const memo = Array(12).fill(0);
[memo[1], memo[2], memo[3]] = [1, 2, 4];

N.forEach((n) => {
    for (let i = 4; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
    }
    console.log(memo[n]);
});
