//const input = require('fs').readFileSync(__dirname + "/example.txt").toString().split("\n").map((num) => num.split(' '));
// const input = require('fs').readFileSync("/dev/stdin").toString().split("\n").map((num) => num.split(' '));
// const [N, arrN, M, arrM] = input;
// const sotredArr = arrN.sort((a, b) => a - b);

// arrM.forEach((e) => {
//     let left = 0;
//     let right = sotredArr.length;
//     let result = 0;
//     const target = parseInt(e);

//     while (left <= right) {
//         const mid = parseInt((left + right) / 2);
        
//         if (target === sotredArr[mid]) {
//             result = 1;
//             break;
//         } else if (target < sotredArr[mid]) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }

//     console.log(result);
// });

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, A, M, B] = input.map(v => v.split(" "));

const array = new Set(A);

const result = B.map(v => array.has(v) ? 1 : 0);

console.log(result.join("\n"));