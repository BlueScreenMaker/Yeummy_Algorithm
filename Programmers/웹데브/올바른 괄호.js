// ( 일때는 그냥 넣고
// ) 를 만났을 때 pop을 해야 하는데, 
// 나온 값이 ( 가 아니라면 그냥 false

function solution(str){
    const stack = [];

    for (const c of s) {
        if (c === '(') stack.push(c);
        else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }

    return stack.length === 0;
}

solution("()")