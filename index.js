const numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  setTimeout(() => { console.log(`number index ${i}`) }, 3000)
}