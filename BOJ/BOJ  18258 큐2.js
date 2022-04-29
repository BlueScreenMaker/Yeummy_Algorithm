const [N, ...inputs] = require('fs')
    .readFileSync(__dirname + '/example.txt')
    .toString()
    .split('\n');

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

    back() {
        return this.tail ? this.tail.data : -1;
    }

    ssize() {
        return this.size;
    }

    empty() {
        return this.size ? 0 : 1;
    }
}

const queue = new LinkedListQueue();
let ans = '';

for (let i = 0; i < N; i++) {
    const input = inputs[i].split(' ');
    
    switch (input[0]) {
        case 'front':
            ans += `${queue.front()}\n`;
            break;
        case 'back':
            ans += `${queue.back()}\n`;
            break;
        case 'size':
            ans += `${queue.ssize()}\n`;
            break;
        case 'empty':
            ans += `${queue.empty() ? 1 : 0}\n`;
            break;
        case 'pop':
            ans += `${queue.empty() ? -1 : queue.dequeue()}\n`;
            break;
        default:
            queue.enqueue(input[1]);
            break;
    }
}

console.log(ans.trim());
