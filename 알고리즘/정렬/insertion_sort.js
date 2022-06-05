function insertionSort() {
  const array = [80, 30, 90, 40, 50, 70, 60, 20, 10, 100, 50];

  for (let i = 1; i < array.length; i++) {
    let j = i;

    // j가 0보다 크면, 뒤에것이 앞에 것 보다 작다면
    while (j > 0 && array[j] < array[j - 1]) {
      // 뒤에 것을 앞에것보다 크도록 바꾼다.
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j--;
    }
  }
  return array;
}

console.log(insertionSort());
