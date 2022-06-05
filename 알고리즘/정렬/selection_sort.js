function selectionSort() {
  const array = [80, 30, 90, 40, 50, 70, 60, 20, 10, 100, 50];

  for (let i = 0; i < array.length; i++) {
    let minNum = array[i];
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (minNum > array[j]) {
        minNum = array[j];
        minIdx = j;
      }
    }
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
  }
  return array;
}

console.log(selectionSort());
