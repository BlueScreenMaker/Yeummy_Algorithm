const [_, ...info] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
let curSolveNum = 0;

const Heap = function () {
    this.heap = [null];
}

Heap.prototype.swap = function (a, b) {
    [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
}

Heap.prototype.moveUp = function (insertedIdx) {
    if (insertedIdx <= 1) return false;

    const parentIdx = Math.floor(insertedIdx /2);

    if (this.heap[insertedIdx] < this.heap[parentIdx]) return true;

    return false;
}

Heap.prototype.moveDown = function (popedIdx) {

    const leftChildIdx = popedIdx * 2;

    const rightChildIdx = popedIdx * 2 + 1;

    if (leftChildIdx >= this.heap.length) return false;

    else if (rightChildIdx >= this.heap.length) {

        if (this.heap[popedIdx] > this.heap[leftChildIdx]) return true;
    }

    else if(this.heap[popedIdx] > this.heap[leftChildIdx] || this.heap[popedIdx] > this.heap[rightChildIdx]) {
        return true;
    }

    return false;
}

Heap.prototype.insert = function (data) {

    if (this.heap.length === 0) {
        this.heap.push(null);
        this.heap.push(data);
        return true;
    }

    this.heap.push(data);

    let insertedIdx = this.heap.length - 1;

    while (this.moveUp(insertedIdx)) {
        const parentIdx = Math.floor(insertedIdx / 2);
    
        [this.heap[insertedIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[insertedIdx]];

        insertedIdx = parentIdx;
    }
    return true;
}

Heap.prototype.pop = function () {
    
    if (this.heap.length <= 1) return null;

    const returnedData = this.heap[1];

    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let popedIdx = 1;

    while (this.moveDown(popedIdx)) {
        const leftChildIdx = popedIdx * 2;
        const rightChildIdx = popedIdx * 2 + 1;

        if (rightChildIdx >= this.heap.length && this.heap[popedIdx] > this.heap[leftChildIdx]) {
            this.swap(leftChildIdx, popedIdx);

            popedIdx = leftChildIdx;
            break;
        }

        if (this.heap[popedIdx] > this.heap[leftChildIdx] || this.heap[popedIdx] >  this.heap[rightChildIdx]) {
            const minIdx = (this.heap[leftChildIdx] < this.heap[rightChildIdx]) ? leftChildIdx: rightChildIdx;

            this.swap(minIdx, popedIdx);

            popedIdx = minIdx;
        }

    }

    return returnedData;
}

Heap.prototype.front = function () {
    return this.heap[1];
}

Heap.prototype.sum = function () {
    return this.heap.reduce((acc, cur) => acc + cur, 0);
}

const heap = new Heap();

const informations = info.map(i => {
    const [deadline, numRamen] = i.split(' ').map(Number);
    return [deadline, numRamen];
}).sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return a[0] - b[0];
});


for (let i = 0; i < informations.length; i++) {

    const [deadline, numRamen] = informations[i];

    if (curSolveNum < deadline) {
        heap.insert(numRamen);
        curSolveNum += 1;
        continue;
    }

    if (curSolveNum >= deadline && heap.front() < numRamen) {
        heap.pop();
        heap.insert(numRamen);
        continue;
    }
}

console.log(heap.sum());