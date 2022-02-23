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
    // 왼쪽 자식 인덱스
    const leftChildIdx = popedIdx * 2;
    // 오른쪽 자식 인덱스
    const rightChildIdx = popedIdx * 2 + 1;

    // 왼쪽 자식 인덱스 유효성 체크
    if (leftChildIdx >= this.heap.length) return false;

    // 오른쪽 자식 인덱스 유효성 체크
    else if (rightChildIdx >= this.heap.length) {
        // 오른쪽 자식이 유효하지 않다면, 그냥 바로 왼쪽 자식으로 스왑
        if (this.heap[popedIdx] > this.heap[leftChildIdx]) return true;
    }
    // 해당 부모 노드에 두 개의 자식 노드를 가
    else if(this.heap[popedIdx] > this.heap[leftChildIdx] || this.heap[popedIdx] > this.heap[rightChildIdx]) {
        return true;
    }

    return false;
}

Heap.prototype.insert = function (data) {

    // 길이가 0 이라면 다시 초기화..
    if (this.heap.length === 0) {
        this.heap.push(null);
        this.heap.push(data);
        return true;
    }

    this.heap.push(data);
    // 방금 들어간 노드의 인덱스 확인
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

    // 지금 나갈 데이터는 리스트에 가장 앞에 있음.
    const returnedData = this.heap[1];
    // 그리고 루트는 가장 마지막에 있는 요소로 변경
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let popedIdx = 1;

    while (this.moveDown(popedIdx)) {
        const leftChildIdx = popedIdx * 2;
        const rightChildIdx = popedIdx * 2 + 1;

        // 오른쪽 인덱스가 유효하지 않고, 왼쪽 인덱스의 값이 부모의 값보다 클 때
        if (rightChildIdx >= this.heap.length && this.heap[popedIdx] > this.heap[leftChildIdx]) {
            this.swap(leftChildIdx, popedIdx);

            popedIdx = leftChildIdx;
            break;
        }

        // 부모 노드가 두 개의 노드를 가지고 있고, 이 자식 노드가 부모의 값보다 클 때
        if (this.heap[popedIdx] > this.heap[leftChildIdx] || this.heap[popedIdx] >  this.heap[rightChildIdx]) {
            const minIdx = (this.heap[leftChildIdx] < this.heap[rightChildIdx]) ? leftChildIdx: rightChildIdx;

            this.swap(minIdx, popedIdx);

            popedIdx = minIdx;
        }

    }

    return returnedData;
}

Heap.prototype.print = function () {
    console.log(this.heap);
}


const heap = new Heap();
heap.insert(15)
heap.insert(10)
heap.insert(8)
heap.insert(5)
heap.insert(4)
heap.insert(20)

console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());

