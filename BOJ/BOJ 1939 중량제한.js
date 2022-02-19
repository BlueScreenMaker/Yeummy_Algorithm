const [num, ...route] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const [numIsland, numBridgeRelation] = num.split(' ').map(i => parseInt(i));
const [depart, destination] = route.pop().split(' ').map(i => parseInt(i));
const bridgeLink = {}
let [left, right] = [1, 0];

for (let i = 0; i < numBridgeRelation; i++) {
    const [A, B, C] = route[i].split(' ').map(i => parseInt(i));

    right = Math.max(right, C);

    if (!(A in bridgeLink)) bridgeLink[A] = [];
    if (!(B in bridgeLink)) bridgeLink[B] = [];
    
    bridgeLink[A].push([B, C]);
    bridgeLink[B].push([A, C]);

}

function BFS(curWeight) {
    const [isVisited, needVisit] = [new Array(numIsland + 1).fill(false), [depart]]; 

    isVisited[depart] = true;

    while (needVisit.length > 0) {
        const node = needVisit.shift();

        if (node === destination) return true;

        for (let i = 0, length = bridgeLink[node].length; i < length; i++ ){
            if (!isVisited[bridgeLink[node][i][0]] && bridgeLink[node][i][1] >= curWeight) {
                needVisit.push(bridgeLink[node][i][0]);
                isVisited[bridgeLink[node][i][0]] = true;
            }
        }
    }

    return false;
}

while (left <= right) {
    mid = parseInt((left + right) / 2);

    if (BFS(mid)) left = mid + 1;
    else right = mid - 1;
}

console.log(right);