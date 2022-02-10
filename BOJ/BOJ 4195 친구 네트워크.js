//const input = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input.splice(0, 1)[0]);
const netWorksSet = [];

while (input.length !== 0) {
    const num = parseInt(input.shift());
    const netWorks = input.splice(0, num);
    netWorksSet.push(netWorks.map((netWork) => netWork.split(' ')));
}

function unionSet(netWorks) {
    parent = {};
    rank = {};
    depth = {};

    const find = (node) => {
        if (parent[node] !== node) 
            parent[node] = find(parent[node]);
        return parent[node];
    }

    const union = (nodeX, nodeY) => {
        const root1 = find(nodeX);
        const root2 = find(nodeY);

        if (rank[root1] > rank[root2]) {
            parent[root2] = root1;
            depth[root1] += depth[root2];
            console.log(depth[root1]);
        }
        else {
            parent[root1] = root2;
            if (rank[root1] === rank[root2]) 
                rank[root2] += 1;
            depth[root2] += depth[root1];
            console.log(depth[root2]);
        }
    }

    netWorks.forEach((netWork) => {
        const [A, B] = netWork;
        parent[A] = A;
        parent[B] = B;

        rank[A] = 0;
        rank[B] = 0;

        depth[A] = 1;
        depth[B] = 1;
    });

    for (let i = 0; i < netWorks.length; i++) {
        const [A, B] = netWorks[i];

        if (find(A) !== find(B)) {
            union(A, B);
        } else {
            console.log(depth[find(A)]);
        }
    }

}


for (let i = 0; i < N; i++) {
    unionSet(netWorksSet[i]);
}
