// bubble sort

function bubbleSort() {
  const array = [80, 30, 90, 40, 50, 70, 60, 20, 10, 100, 50];

  for (let i = 0; i < array.length - 1; i++) {
    let isSwap = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        isSwap = true;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    if (!isSwap) break;
  }

  return array;
}

console.log(bubbleSort());
