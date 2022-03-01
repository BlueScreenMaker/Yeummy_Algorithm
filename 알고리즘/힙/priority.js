// Queue

function Queue() {
    collection = [];

    this.print= () => console.log(collection);

    this.enqueue = (element) => collection.push(element);

    this.dequeue = () => collection.shift();

    this.front = () => collection[0];

    this.size = () => collection.length;

    this.isEmpty = () => collection.length === 0;
}


function PriorityQueue() {
    const collection = [];

    this.print = () => console.log(collection);

    this.isEmpty = () => collection.length === 0;

    this.front = () => collection[0];

    this.size = () => collection.length;

    this.enqueue = (element) => {
        if (this.isEmpty()) collection.push(element);

        else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                // 들어온 요소와 기존의 collection 비교
                if (element < collection[i]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }

            if (!added) collection.push(element);
        }
    }

    this.dequeue = () => {
        const value = collection.shift();
        return value[0];
    }
};

const pq = new PriorityQueue();
pq.enqueue(30);
pq.enqueue(25);
pq.enqueue(40);
pq.enqueue(5);
pq.enqueue(10);
pq.enqueue(9);

pq.print();
pq.dequeue();
pq.front();
pq.print();


