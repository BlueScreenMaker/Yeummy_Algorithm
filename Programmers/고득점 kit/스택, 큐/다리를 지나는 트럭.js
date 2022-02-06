const sum = (arr) => arr.reduce(function(a, b){ return a + b; }, 0);

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    const bridge =  Array.from({length: bridge_length}, () => 0);

    while (bridge.length) {
        bridge.shift();

        if (truck_weights.length !== 0) {
            if (sum(bridge) + truck_weights[0] <= weight)
                bridge.push(truck_weights.shift())
            else
                bridge.push(0);
        }
        answer += 1;
    }

    return answer;
}

console.log(solution(2, 10, [7,4,5,6]));