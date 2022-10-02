const findIdx = (keyPad, number) => {
    const x = Math.floor(keyPad.indexOf(number) / 3);
    const y = keyPad.indexOf(number) % 3;
    return [x, y];
};

const calDist = (handPos, keyPos) => {
    return Math.abs(handPos[0] - keyPos[0]) + Math.abs(handPos[1] - keyPos[1]);
};

function solution(numbers, hand) {
    const keyPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'];
    const handPos = { left: [3, 0], right: [3, 2] };

    const answer = numbers.map(number => {
        const keyPos = findIdx(keyPad, number);
        
        if (number === 1 || number === 4 || number === 7) {
            handPos.left = keyPos;
            return 'L';
        }

        if (number === 3 || number === 6 || number === 9) {
            handPos.right = keyPos;
            return 'R';
        }

        const leftDist = calDist(handPos.left, keyPos);
        const rightDist = calDist(handPos.right, keyPos);

        if (leftDist === rightDist) {
            if (hand === 'left') {
                handPos.left = keyPos;
                return 'L';
            }

            if (hand === 'right') {
                handPos.right = keyPos;
                return 'R';
            }
        }

        if (leftDist < rightDist) {
            handPos.left = keyPos;
            return 'L';
        }

        if (leftDist > rightDist) {
            handPos.right = keyPos;
            return 'R';
        }
    });

    return answer.join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right') === 'LRLLLRLLRRL');
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left") === "LRLLRRLLLRR");
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right") === "LLRLLRLLRL");
