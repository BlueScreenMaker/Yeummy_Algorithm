function selectionSort() {
  const array = [80, 30, 90, 40, 50, 70, 60, 20, 10, 100, 50];

  // 가장 최솟값을 찾아야 한다.
  for (let i = 0; i < array.length; i++) {
    const minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) minIdx = j;
    }

    if (minIdx !== i) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }
  }
}

console.log(insertionSort());
