const N = Number(require('fs').readFileSync(__dirname + '/example.txt').toString().trim());

let answer = 0;

function isAvailable(candidate, currentCol) {
    const currentRow = candidate.length;

    for (let i = 0; i < candidate.length; i++) {
        if (candidate[i] === currentCol ||
            Math.abs(candidate[i] - currentCol) === currentRow - i) 
            return false
    }

    return true;
}

function DFS(N, currentRow, curCandidate) {
    if (currentRow === N) {
        answer += 1;
        return;
    }

    for (let i = 0; i < N; i++) {
        if (isAvailable(curCandidate, i)) {
            curCandidate.push(i);
            DFS(N, currentRow + 1, curCandidate);
            curCandidate.pop();
        }
    }
}

DFS(N, 0, []);

console.log(answer);