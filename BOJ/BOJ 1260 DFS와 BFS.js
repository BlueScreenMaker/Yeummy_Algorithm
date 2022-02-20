const [num, ...no] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const [numNode, numEdge, startNode] = num.split(' ').map(Number);
const node = no.map(n => n.split(' '));
const graph = Array(numNode + 1).fill().map(i => []);
let [visited, needVisit] = [Array(numNode + 1).fill(false), []];
let [dfsAns, bfsAns] = ['', ''];

for (let i = 0; i < numEdge; i++) {
    const [A, B] = node[i].map(Number);

    graph[A].push(parseInt(B));
    graph[B].push(parseInt(A));

    graph[A].sort((a, b) => b - a);
    graph[B].sort((a, b) => b - a);

}

function DFS() {
    needVisit.push(startNode);

    while (needVisit.length >= 1) {
        const node = needVisit.pop();

        if (!visited[node]) {
            dfsAns += node + ' ';
            visited[node] = true;

            for (let i = 0, length = graph[node].length; i < length; i++) {
                const curNode = graph[node][i];
    
                if (!visited[curNode]) needVisit.push(curNode);
            }
        }
    }

    visited = Array(numNode + 1).fill(false);
    needVisit = [startNode];
}

function BFS() {

    while (needVisit.length >= 1) {
        const node = needVisit.pop();

        if (!visited[node]) {
            bfsAns += node + ' ';
            visited[node] = true;

            for (let i = graph[node].length - 1; i >= 0; i--) {
                const curNode = graph[node][i];
    
                if (!visited[curNode]) needVisit.unshift(curNode);
            }
        }
    }    
}

DFS();
BFS();
console.log(dfsAns);
console.log(bfsAns);