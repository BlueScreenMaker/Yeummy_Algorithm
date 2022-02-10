function qSort(lists) {
    if (lists.length <= 1) return lists;
    
    const pivot = lists[0];
    const left = lists.slice(1).filter(list => pivot > list);
    const right = lists.slice(1).filter(list => pivot <= list);

    return [...qSort(right), pivot, ...qSort(left)];
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);

console.log(qSort(input).join(''));