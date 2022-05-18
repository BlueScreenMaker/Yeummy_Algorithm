// 일단 입력에 대해 진수변환을 해야 한다.
// 그리고 0을 기준으로 나눈다.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  if (num % 2 === 0) {
    return num === 2 ? true : false;
  }

  const sqrt = parseInt(Math.sqrt(num));

  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }

  return true;
}

function solution(n, k) {
  return n
    .toString(k)
    .split("0")
    .filter(n => n)
    .filter(n => isPrime(Number(n))).length;
}
