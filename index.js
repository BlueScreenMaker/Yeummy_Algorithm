// const name = {
//   first: 'kung bum',
//   last: 'kim'
// }

// const hello = ['kung bum', 'kim'];

// console.log(Symbol.iterator in name);
// console.log(Symbol.iterator in hello);

// const iterable = {
// 		// 이터레이터를 키로 갖게 한다.
//     [Symbol.iterator]() {
//         let i = 3;
//         return {
//             next() {
//                 return i === 0 ? {done: true}: { value: i--, done: false };
//             }
//         }
//     }
// }

// let iterator = iterable[Symbol.iterator]();
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { done: true }


// for (const a of iterable) console.log(a);

console.log(typeof null)
