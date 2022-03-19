function solution(board, moves) {
    const basket = [];
    let answer = 0;
    
    for (let i = 0, length = moves.length; i < length; i++) {
        const pos = moves[i] - 1;
        for (let j = 0, length = board.length; j < length; j++) {
            const value = board[j][pos];
            if (value !== 0) {
                if (basket[basket.length - 1] === value) {
                    basket.pop();
                    answer += 2;
                }
                else {
                    basket.push(value);
                }
                board[j][pos] = 0;
                break;
            } 
        }
    } 

    return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]) === 4);
