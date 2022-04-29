/**
 * 1의 자리가 오면 그 갯수만큼
 * 10의 자리면 한 숫자당 2개씩 -> 20개
 * 100의 지리면 한 숫자당 3개씩
 * 1000의 자리면 한 숫자당 4개씩
 */
const N = require('fs').readFileSync(__dirname + '/example.txt').toString().trim();
