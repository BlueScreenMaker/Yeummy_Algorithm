const [num, ...rel] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const [numCom, numRel] = num.split(' ').map(Number);
const graph = Array(numCom + 1).fill().map(i => []);
const depth = Array(numCom + 1).fill(0);
let answer = '';

function DFS(startNode) {
    const [visited, needVisit] = [Array(numCom + 1).fill(false), [startNode]];
    let count = 0;

    visited[startNode] = true;
    while (needVisit.length >= 1) {
        const node = needVisit.pop();

        for (let i = 0, length = graph[node].length; i < length; i++) {
            const curNode = graph[node][i];
            if (!visited[curNode]) {
                count += 1;
                visited[curNode] = true;
                needVisit.push(curNode);
            }
        }
    }

    depth[startNode] = count;
}

for (let i = 0; i < numRel; i++) {
    const [to, target] = rel[i].split(' ').map(Number);
    graph[target].push(to);
}

for (let i = 1; i <= numCom; i++) {
    DFS(i);
}

const maxVal = Math.max(...depth);

for (let i = 0; i <= numCom; i++) {
    if(depth[i] === maxVal) answer += i + ' ';
} 

console.log(answer.trim());
