const input = require('fs').readFileSync('example.txt').toString().trim();

const ascending = '1 2 3 4 5 6 7 8';
const descending = '8 7 6 5 4 3 2 1';

if (input === ascending) console.log('ascending');
else if (input === descending) console.log('descending');
else console.log('mixed');