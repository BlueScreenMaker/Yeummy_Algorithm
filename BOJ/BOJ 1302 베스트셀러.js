const input = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const [_, ...books] = input;
const bookList = {};

books.forEach(book => {
    if (book in bookList) {
        bookList[book] += 1;
    } else {
        bookList[book] = 1;
    }
});

const result = Object.entries(bookList).sort((a, b) => {
    if (a[1] === b[1] && a[0] < b[0]) return -1;
    else if (a[1] === b[1] && a[0] > b[0]) return 1;
    else if (a[1] === b[1] && a[0] === b[0]) return 0;

    return b[1] - a[1];
});
console.log(result[0][0]);