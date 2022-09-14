/**
 * 3의 배수가 아니면 1의 자리는 3진수랑 동일하다.
 * 
 * + 그럼 3의 배수일 때는?
 * 
 *   끝자리를 4로 바꾼다.
 * 
 * + 그럼 앞자리는 어떻게 해야 할까?
 *   
 *    
 * 
 */

function solution(n) {

    console.log(n.toString(3));
    
    // return n % 3;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
