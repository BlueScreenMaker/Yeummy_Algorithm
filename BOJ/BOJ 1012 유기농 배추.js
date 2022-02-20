const [roop, ...rest] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
let curIdx = 0;

function DFS(x, y, row, col, graph) {
    graph[x][y] = 0;

    if (x + 1 < row && graph[x + 1][y] === 1) DFS(x + 1, y, row, col, graph);
    if (x - 1 >= 0 && graph[x - 1][y] === 1) DFS(x - 1, y, row, col, graph);
    if (y + 1 < col && graph[x][y + 1] === 1) DFS(x, y + 1, row, col, graph);
    if (y - 1 >= 0 && graph[x][y - 1] === 1) DFS(x, y - 1, row, col, graph);

    return 0;
}

for (let i = 0; i < Number(roop); i++) {
    let count = 0;
    const [row, col, num] = rest[curIdx].split(' ').map(Number);
    const graph = Array.from(Array(row), ()=> Array(col).fill(0));

    curIdx += 1;
    for (let i = 0; i < num; i++) {
        const [x, y] = rest[curIdx + i].split(' ').map(Number);
        graph[x][y] = 1;        
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (graph[i][j] === 1) {
                DFS(i, j, row, col, graph);
                count++;   
            }
        }
    }

    curIdx += num;
    console.log(count);
}
