const [...data] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
let curIdx = 0;

function dijkstra(start, graph, distance, dropped) {
    const queue = [];
    queue.push([0, start]);
    distance[start] = 0;

    while (queue.length > 0) {
        const [dist, node] = queue.shift();

        if (dist > distance[node]) continue;

        if (!!graph.get(node)) {
            
            graph.get(node).forEach((n => {
                const [curDist, curNode] = n;
                const cost = dist + curDist;

                if (!dropped[node][curNode] && cost < distance[curNode]) {
                    distance[curNode] = cost;

                    queue.push([cost, curNode]);
                    queue.sort((a, b) => a[0] - b[0]);
                }
            }));
        }
    }
}

function bfs(start, end, reversedGraph, distance, dropped) {
    const [visited, needVisit] = [Array(reversedGraph.size).fill(false), [end]];

    while (needVisit.length > 0) {
        const node = needVisit.shift();

        if (node === start) continue;

        if (!!reversedGraph.get(node) && !visited[node]) {

            visited[node] = true;

            reversedGraph.get(node).forEach(n => {
                const [curDist, curNode] = n;

                if (distance[node] === distance[curNode] + curDist) {
                    dropped[curNode][node] = true;
                    needVisit.push(curNode);
                }
            })
        }
    }
}

function setGraph(datas) {
    const graph = new Map();
    const reversedGraph = new Map();

    datas.forEach((data) => {
        const [U, V, P] = data.split(' ').map(Number);

        if (!graph.get(U)) graph.set(U, []);

        if (!reversedGraph.get(V)) reversedGraph.set(V, []);

        graph.get(U).push([P, V]);
        reversedGraph.get(V).push([P, U]);
    });

    return {graph, reversedGraph};
}


while (true) {
    const [N, M] = data[curIdx].split(' ').map(Number);
    
    if (N === 0 && M === 0) break;

    let distance = Array(N).fill(Infinity);
    const [S, D] = data[curIdx + 1].split(' ').map(Number);
    curIdx += 2;

    const {graph, reversedGraph} = setGraph(data.slice(curIdx, (curIdx + M)));
    const dropped = Array.from(Array(N), () => new Array(N).fill(false));

    dijkstra(S, graph, distance, dropped);
    bfs(S, D, reversedGraph, distance, dropped);

    distance = Array(N).fill(Infinity);
    dijkstra(S, graph, distance, dropped);

    if (distance[D] === Infinity) console.log(-1);
    else console.log(distance[D]);
    
    curIdx += M;
}