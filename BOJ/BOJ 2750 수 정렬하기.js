function qSort(lists) {
    if (lists.length <= 1) return lists;
    
    const pivot = lists[0];
    const left = lists.slice(1).filter(list => pivot > list);
    const right = lists.slice(1).filter(list => pivot <= list);

    return [...qSort(left), pivot, ...qSort(right)];
}

// const input = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, ...lists] = input;
const sortedLists = qSort(lists.map(list => parseInt(list)));

sortedLists.forEach((sortedList) => console.log(sortedList));

