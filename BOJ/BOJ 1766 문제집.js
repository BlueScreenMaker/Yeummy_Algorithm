class Heap {
    constructor() {
        this.heap = [null];
        this._size = 0;
        this.operator = function (a, b) { return a < b; };
    }
    size() {
        return this._size;
    }
    push(x) {
        this.heap[++this._size] = x;
        for (var cur = this._size; cur > 1; cur >>= 1) {
            var half = cur >> 1;
            if (this.operator(this.heap[cur], this.heap[half])) {
                var temp = this.heap[cur];
                this.heap[cur] = this.heap[half];
                this.heap[half] = temp;
            }
            else {
                break;
            }
        }
    }
    pop() {
        if (this._size === 0)
            return;
        const returnVal = this.heap[1];
        this.heap[1] = this.heap[this._size--];
        var child;
        for (var cur = 1; (cur << 1) <= this._size; cur = child) {
            var dC = cur << 1;
            if (dC + 1 > this._size || this.operator(this.heap[dC], this.heap[dC + 1])) {
                child = dC;
            }
            else {
                child = dC + 1;
            }
            if (this.operator(this.heap[child], this.heap[cur])) {
                var temp = this.heap[cur];
                this.heap[cur] = this.heap[child];
                this.heap[child] = temp;
            }
            else {
                break;
            }
        }
        return returnVal;
    }
}




const [num, ...no] = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');
const [numProblem, problemInfo] = num.split(' ').map(i => parseInt(i));
const node = no.map(i => i.split(' ').map(j => parseInt(j)));
const heap = new Heap();
const indegree = new Array(numProblem + 1).fill(0);
const array = new Array(numProblem + 1).fill(null);
const answer = [];

for (let i = 1; i <= problemInfo; i++) {
    const [x, y] = node[i - 1];

    if (!array[x]) array[x] = [];
    if (!array[y]) array[y] = [];
    
    array[x].push(y);
    indegree[y] += 1;
}

for (let i = 1; i <= numProblem; i++) if (indegree[i] === 0) heap.push(i);


while (heap.size() ) {
    const node = heap.pop()
    answer.push(node);

    for (let i = 1, length = array[node].length; i <= length; i++) {
        const idx = array[node][i - 1];
        indegree[idx] -= 1;
        if (indegree[idx] === 0) heap.push(idx);
    }
}

console.log(answer.join(' '));