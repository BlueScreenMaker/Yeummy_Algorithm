//const input = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// 반복할 횟수는 N이다.
const N = parseInt(input.splice(0, 1)[0]);
// 우리가 계산할 네트워크의 노드를 저장하는 배열
const netWorksSet = [];

// 연산해야 할 네트워크를 파싱한다.
while (input.length !== 0) {
    // 네트워크의 갯수
    const num = parseInt(input.shift());
    // 노드
    const netWorks = input.splice(0, num);
    // 노드들을 split(' ')을 통해 push
    netWorksSet.push(netWorks.map((netWork) => netWork.split(' ')));
}

// Union Find 알고리즘
function unionSet(netWorks) {
    // 부모 노드를 저장 할 수 있는 객체
    parent = {};
    // Union할 때 효율적으로 하기 위해 Union-rank 사용
    rank = {};
    // 부모 노드의 자식 노드를 저장하는 객체
    depth = {};

    // 현재 노드의 부모 노드를 찾는 로직
    const find = (node) => {
        if (parent[node] !== node) 
            parent[node] = find(parent[node]);
        return parent[node];
    }

    // 두 개의 노드를 Union 하는 로직
    const union = (nodeX, nodeY) => {
        // 각 노드의 부모 노드를 찾는다.
        const root1 = find(nodeX);
        const root2 = find(nodeY);

        // 랭크가 큰 놈 기준으로 Union한다.
        // 그러니까 랭크는 Union의 기준이 되는 것.
        if (rank[root1] > rank[root2]) {
            // 이 말은 root2의 부모는 root1이 되는 거니까
            parent[root2] = root1;
            // root1의 자식이 늘어나는 것임. 따라서, 부모에게 자식의 노드의 갯수를 더해주어야 함.
            depth[root1] += depth[root2];
            console.log(depth[root1]);
        }
        else {
            // 랭크로 결정할 수 없다면, 임의로 한다.
            parent[root1] = root2;
            if (rank[root1] === rank[root2]) 
                rank[root2] += 1;
            // 이또한 같다.
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
            // 이 부분에서 처음에 틀렸는데,
            // 부모가 같은 경우에는 그냥 아무거나 출력해주면된다.
            // Why? 부모가 같으니까!
            console.log(depth[find(A)]);
        }
    }
}


for (let i = 0; i < N; i++) {
    unionSet(netWorksSet[i]);
}
