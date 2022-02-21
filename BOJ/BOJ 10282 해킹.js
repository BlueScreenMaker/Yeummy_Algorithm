const [num, ...rest] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
let curIdx = 0;

function dijkstra(start, graph, distance) {
    const queue = [];
    queue.push([0, start]);
    distance[start] = 0;
  
    while (queue.length > 0) {
      const [dist, now] = queue.shift();
  
      if (dist > distance[now]) {
        continue;
      }
  
      for (const node of graph[now]) {
        const cost = dist + node[0];
        if (cost < distance[node[1]]) {
          distance[node[1]] = cost;
          queue.push([cost, node[1]]);
        }
      }
    }
  
    return distance;
}
  

for (let i = 0; i < Number(num); i++) {
    const [numCom, numRel, startNode] = rest[curIdx].split(' ').map(Number);
    const graph = Array.from(Array(numCom + 1), () => Array(0));
    const distance = Array(numCom + 1).fill(Infinity);

    curIdx += 1;
    for (let j = 0; j < numRel; j++) {
        const [child, parent, timeLimit] = rest[curIdx + j].split(' ').map(Number);

        graph[parent].push([timeLimit, child]);
    }


    const result = dijkstra(startNode, graph, distance);
    let count = 0;
    let time = 0;

    result.forEach((v) => {
      if (v !== Infinity) {
        count += 1;
  
        if (time < v) {
          time = v;
        }
      }
    });

    console.log(count, time);

    curIdx += numRel;
}
