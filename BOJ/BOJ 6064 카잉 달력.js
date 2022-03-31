/**
 * M과 N보다 작거나 같은 두 개의 자연수 x, y를 가지고 각 년도를 <x:y>와 같이 표현 함.
 * x, y는 M과 N보다 작거나 같음.
 * 
 * 세상이의 시초인 <1:1>로 표현하고 두 번째 해를 <2:2>로 표현 함.
 * 
 * <x:y>의 다음 해를 표현 한 것을 <x':y'>라고 한다.
 * 
 * 만일 x < M이면, x' = x + 1이고, 그렇지 않으면 x' = 1이다.
 * 
 * 같은 방식으로 만일 y < N이면 y' = y + 1 이다. 그렇지 않으면 y' = 1
 * 
 * 즉, x, y가 주어지는데, M이 x보다 크다면 x'은 x + 1이고 M이 x와 같다면 x'은 1이다.
 * 
 * N이 y보다 크다면, y'은 y + 1이고 N과 y와 같다면 y'은 1이다.
 * 
 * <M, N>은 달력의 마지막 해로서, 이 해에 세상의 종말이 도래
 * 
 * 즉, 세상의 종말은 몇번째 해임?
 * 
 */

let [num, ...inputs] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
k = Number(num);
inputs = inputs.map(input => input.split(' '));

