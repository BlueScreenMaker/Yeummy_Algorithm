const [num, ...arr] = require('fs').readFileSync(__dirname + '/dev/stdin').toString().trim().split('\n');
const [n, m] = num.split(' ').map(Number);
const graph = Array.from(Array(n), () => new Array(m).fill(0));
let answer = 0;

for (let i = 0; i < n; i++) {
    const row = arr[i].split(' ');
    for (let j = 0; j < m; j++)
        graph[i][j] = Number(row[j]);
}


const check = (y, x) => {
    let value = 0;

    if(y+2 <= n-1 && x+1 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y][x+1] + graph[y+1][x] + graph[y+2][x]);
    }
    
    if(y+2 <= n-1 && x+1 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y][x+1] + graph[y+1][x+1] + graph[y+2][x+1]);
    }
    
    if(y+1 <= n-1 && x+2 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y+1][x] + graph[y][x+1] + graph[y][x+2]);
    }
    
    if(y+1 <= n-1 && x+2 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y][x+1] + graph[y][x+2] + graph[y+1][x+2]);
    }
    
    if(y+1 <= n-1 && x+1 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y+1][x] + graph[y][x+1] + graph[y+1][x+1]);
    }
    
    if(y+2 <= n-1 && x+1 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y+1][x] + graph[y+2][x] + graph[y+2][x+1]);
    }
    
    if(y+2 <= n-1 && x-1 >= 0){
        value = Math.max(value, graph[y][x] + graph[y+1][x] + graph[y+2][x] + graph[y+2][x-1]);
    }
    
    if(y+1 <= n-1 && x-2 >= 0){
        value = Math.max(value, graph[y][x] + graph[y+1][x] + graph[y+1][x-1] + graph[y+1][x-2]);
    }
    
    if(y+1 <= n-1 && x+2 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y+1][x] + graph[y+1][x+1] + graph[y+1][x+2]);
    }
    
    if(y+3 <= n-1){
        value = Math.max(value, graph[y][x] + graph[y+1][x] + graph[y+2][x] + graph[y+3][x]);
    }
    
    if(y+2 <= n-1 && x+1 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y+1][x] + graph[y+1][x+1] + graph[y+2][x+1]);
    }
    
    if(y+2 <= n-1 && x-1 >= 0){
        value = Math.max(value, graph[y][x] + graph[y+1][x] + graph[y+1][x-1] + graph[y+2][x-1]);
    }
    
    if(y+1 <= n-1 && x-1 >= 0 && x+1 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y][x+1] + graph[y+1][x] + graph[y+1][x-1]);
    }
    
    if(y+1 <= n-1 && x+2 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y][x+1] + graph[y+1][x+1] + graph[y+1][x+2]);
    }
    
    if(x+3 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y][x+1] + graph[y][x+2] + graph[y][x+3]);
    }
    
    if(y+1 <= n-1 && x-1 >= 0 && x+1 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y+1][x] + graph[y+1][x-1] + graph[y+1][x+1]);
    }
    
    if(y+1 <= n-1 && x-1 >= 0 && x+1 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y][x+1] + graph[y][x-1] + graph[y+1][x]);
    }
    
    if(y+2 <= n-1 && x-1 >= 0){
        value = Math.max(value, graph[y][x] + graph[y+1][x] + graph[y+2][x] + graph[y+1][x-1]);
    }
    
    if(y+2 <= n-1 && x+1 <= m-1){
        value = Math.max(value, graph[y][x] + graph[y+1][x] + graph[y+2][x] + graph[y+1][x+1]);
    }

    return value;
}

for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
        answer = Math.max(answer, check(x, y));
    }
}

console.log(answer);