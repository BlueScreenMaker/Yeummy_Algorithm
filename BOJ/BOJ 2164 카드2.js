const N = require('fs').readFileSync(__dirname + '/example.txt').toString().trim().split('\n');

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) {
        const node = new Node(data);

        if (!this.head) this.head = node;
        else this.tail.next = node;

        this.tail = node;
        this.tail.next = null;

        this.size++;
    }

    dequeue() {
        if (!this.head) return -1;

        const data = this.head.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.size--;

        return data;
    }

    front() {
        return this.head ? this.head.data : -1;
    }

    ssize() {
        return this.size;
    }
}

const queue = new LinkedListQueue();

for (let i = 1; i <= N; i++) {
    queue.enqueue(i);
}

while (queue.ssize() > 1) {
    const size = queue.ssize();

    if (size === 2) {
        queue.dequeue();
        continue;
    }

    queue.dequeue();
    const data = queue.dequeue();

    queue.enqueue(data);
}

console.log(queue.front());
