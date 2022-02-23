const [...data] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
let curIdx = 0;

function dijkstra(start, graph, distance) {
    const queue = [];
    queue.push([0, start]);
    distance[start] = 0;

    while (queue.length > 0) {
        const [dist, now] = queue.shift();

        if (dist > distance[now]) continue;

        for (let i = 0, length = graph[now].length; i < length; i++) {
            const [curDist, curNode] = graph[now][i];
            const cost = dist + curDist;

            if (curDist !== -1 && cost < distance[curNode]) {
                distance[curNode] = cost;

                queue.push([cost, curNode]);
                queue.sort((a, b) => a[0] - b[0]);
            }
        }
    }
}

function bfs(end, graph, reversedGraph, distance) {
    const [visit, needVisit] = [Array(graph.length).fill(false), [end]];

    visit[end] = true;

    while (needVisit.length > 0) {
        const node = needVisit.shift();
        for (let i = 0; i < reversedGraph[node].length; i++) {
            const [curCost, curNode, length] = reversedGraph[node][i];
            if (!visit[curNode] && distance[node] === distance[curNode] + curCost) {
                visit[node] = true;
                needVisit.push(curNode);

                graph[curNode][length] = [-1, node];
            }
        }
    }
}


while (true) {
    const [N, M] = data[curIdx].split(' ').map(Number);
    
    if (N === 0 && M === 0) break;

    const graph = Array.from(Array(N), () => Array(0));
    const reversedGraph = Array.from(Array(N), () => Array(0));
    let distance = Array(N).fill(Infinity);
    const [S, D] = data[curIdx + 1].split(' ').map(Number);

    curIdx += 2;
   
    for (let i = 0; i < M; i++) {
        const [U, V, P] = data[curIdx + i].split(' ').map(Number);
        const length = graph[U].length;
        graph[U].push([P, V]);
        reversedGraph[V].push([P, U, length]);
    }

    dijkstra(S, graph, distance);

    if (distance[D] === Infinity) console.log(-1);
    else {
        bfs(D, graph, reversedGraph, distance);

        distance = Array(N).fill(Infinity);
        dijkstra(S, graph, distance);

        if (distance[D] === Infinity) console.log(-1);
        else console.log(distance[D]);
    }
    
    curIdx += M;
}
