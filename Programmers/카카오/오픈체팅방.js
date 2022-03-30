function solution(record) {
    const answer = [];
    const records = record.map((r) => r.split(' '));
    const userName = new Map();

    records.forEach((r) => {
        const [state, id, nickName] = r;
        // 마지막 조건 채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.
        // 이 부분을 위해 처리해줘야 한다.
        if (state !== 'Leave') userName.set(id, nickName);
    });

    records.map(record => {
        const [state, id, _] = record;
        const nickName = userName.get(id);

        if (state === 'Enter') answer.push(`${nickName}님이 들어왔습니다.`);
        else if (state === 'Leave') answer.push(`${nickName}님이 나갔습니다.`);
    });
    
    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));