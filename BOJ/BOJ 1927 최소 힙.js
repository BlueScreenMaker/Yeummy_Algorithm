const Heap = function () {
    this.heap = [null];
}

Heap.prototype.length = function () {
    return this.heap.length;
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

    if (leftChildIdx >= this.length()) return false;

    else if (rightChildIdx >= this.length()) {
        if (this.heap[popedIdx] > this.heap[leftChildIdx]) return true;
    }

    else if(this.heap[popedIdx] > this.heap[leftChildIdx] || this.heap[popedIdx] > this.heap[rightChildIdx]) {
        return true;
    }

    return false;
}

Heap.prototype.insert = function (data) {

    if (this.length() === 0) {
        this.heap.push(null);
        this.heap.push(data);
        return true;
    }

    this.heap.push(data);

    let insertedIdx = this.length() - 1;

    while (this.moveUp(insertedIdx)) {
        const parentIdx = Math.floor(insertedIdx / 2);
    
        [this.heap[insertedIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[insertedIdx]];

        insertedIdx = parentIdx;
    }
    return true;
}

Heap.prototype.pop = function () {
    
    if (this.length() <= 1) return 0;

    const returnedData = this.heap[1];

    this.heap[1] = this.heap[this.length() - 1];
    this.heap.pop();

    let popedIdx = 1;

    while (this.moveDown(popedIdx)) {
        const leftChildIdx = popedIdx * 2;
        const rightChildIdx = popedIdx * 2 + 1;

        if (rightChildIdx >= this.length() && this.heap[popedIdx] > this.heap[leftChildIdx]) {
            this.swap(leftChildIdx, popedIdx);

            popedIdx = leftChildIdx;
            break;
        }

        if (this.heap[popedIdx] > this.heap[leftChildIdx] || this.heap[popedIdx] > this.heap[rightChildIdx]) {
            const minIdx = (this.heap[leftChildIdx] < this.heap[rightChildIdx]) ? leftChildIdx: rightChildIdx;

            this.swap(minIdx, popedIdx);

            popedIdx = minIdx;
        }

    }
    return returnedData;

}

const heap = new Heap();


const [num, ...li] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const list = li.map(l => parseInt(l));
let answer = '';

for (let i = 0; i < parseInt(num); i++) {
    if (list[i] !== 0) {
        heap.insert(list[i]);
    } else {
        if (heap.length() === 1) {
            answer += '0' + '\n';
        } else {
            answer += `${heap.pop()}\n`;
        }
    }

}

console.log(answer.trim());