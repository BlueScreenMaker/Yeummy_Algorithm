const input = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const n = Number(input[0]);
const N = input[0].split('').map(Number);
const M = Number(input[1]);
const selection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let broken = [];
let result = [];

function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

if (M) {
    broken = input[2].split(' ').map(Number);
}

if (n === 100 || M === 0) {
    if (n === 100) console.log(0);
    else console.log(N.length);
} 
else {
    let answer = Math.abs(100 - n);

    for (let i = 0; i < M; i++) {
        const idx = selection.indexOf(broken[i]);
        selection.splice(idx, 1);
    }

    for (let j = 1; j <= N.length + 1; j++) {
        result.push(...permutation(selection, j));
    }

    for (let j = 0, length = result.length; j < length; j++) {

        const num = Number(result[j].join(''));
        const abs = Math.abs(n - num);
        
        answer = Math.min(answer, abs + result[j].length);
    }

    console.log(answer);
}


// if (n !== 100) {

//     for (let i = 0; i < M; i++) {
//         const idx = selection.indexOf(broken[i]);
//         selection.splice(idx, 1);
//     }

//     for (let j = 0, length = N.length; j < length; j++) {
//         let [cur, num] = [Infinity, Infinity];
//         for (let k = selection.length - 1; k >= 0; k--) {
//             const value = Math.abs(N[j] - selection[k]);
            

//             if (N[j] === 0 && (Number(answer[0]) < N[0])) {
//                 cur = value;
//                 num = selection[k];
//                 break;
//             }

//             if (value <= cur) {
//                 cur = value;
//                 num = selection[k];
//             }
//         }

//         if (j === 0) {
//             answer = '';
//         }

//         answer += num;
//     }

//     console.log(Math.abs(n - Number(answer)) + length);

// }
// else if (n === 100) { console.log(0); } 