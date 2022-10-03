function bfs(x, y, isVisited, image) {
    const currentColor = image[x][y];
    const queue = [[x, y]];
    const deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let pointer = 0;

    while (queue.length) {
        const [x, y] = queue[pointer++];

        for (let delta of deltas) {
            const [dx, dy] = [x + delta[0], y + delta[1]];

            if (dx < 0 || dx >= n || dy < 0 || dy >= m) {
                continue;
            }

            if (image[dx][dy] === currentColor && !isVisited[dx][dy]) {
                isVisited[dx][dy] = true;
                queue.push([dx, dy]);
            }
        }
    }
}

function solution(n, m, image) {
    let answer = 0;
    const isVisited = Array.from(Array(n), () => Array(m).fill(false));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (isVisited[i][h]) {
                isVisited[i][j] = true;
                bfs(i, j, isVisited, image);
                answer++;
            }
        }
    }
}
