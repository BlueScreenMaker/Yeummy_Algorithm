const [num, ...tr] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const tree = {};
let preOrderAns = '', inOrderAns = '', postOrderAns = '';

for (let i = 0; i < num; i++) {
    const [root, left, right] = tr[i].split(' ');
    tree[root] = [root, left, right];
}

function preOrder(key) {

    if (!tree[`${key}`]) return;

    const [root, left, right] = tree[`${key}`];

    preOrderAns += root;

    preOrder(left);

    preOrder(right);
}

function inOrder(key) {

    if (!tree[`${key}`]) return;

    const [root, left, right] = tree[`${key}`];

    inOrder(left);

    inOrderAns += root;

    inOrder(right);
}

function postOrder(key) {

    if (!tree[`${key}`]) return;

    const [root, left, right] = tree[`${key}`];

    postOrder(left);

    postOrder(right);

    postOrderAns += root;
}

preOrder('A');
console.log(preOrderAns);
inOrder('A');
console.log(inOrderAns);
postOrder('A');
console.log(postOrderAns);