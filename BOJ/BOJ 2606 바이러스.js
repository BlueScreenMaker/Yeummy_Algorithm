const [numNode, numEdge, ...no] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const [needVisit, visited] = [[1], Array(Number(numNode + 1)).fill(false)];
const netWork = Array(Number(numNode + 1)).fill().map(i => []);
let count = 0;

for (let i = 0; i < Number(numEdge); i++) {
    const [A, B] = no[i].split(' ');

    netWork[Number(A)].push(Number(B));
    netWork[Number(B)].push(Number(A));
}

visited[1] = true;

while (needVisit.length >= 1) {
    const node = needVisit.pop();

    for (let i = 0, length = netWork[node].length; i < length; i++) {
        const curNode = netWork[node][i];
        if (!visited[curNode]) {
            count += 1;
            visited[curNode] = true;
            needVisit.push(curNode);
        }
    }
}

console.log(count);

