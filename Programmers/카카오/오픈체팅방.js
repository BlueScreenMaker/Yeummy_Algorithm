/**
 * 누군가 들어오면 [닉네임]님이 들어왔습니다.
 * 누군가 나가면 [닉네임]님이 나갔습니다.
 * 
 * 챗방에서 닉네임을 변경하는 방법은 다음 두 가지이다.
 *  - 챗방을 나간 후, 새로운 닉네임으로 다시 들어간다.
 *  - 챗방에서 닉네임을 변경한다.
 * 
 * 챗방에서 변경하면 기존에 있는 것도 다 변경된다. -> 즉, 기존에 찍혀있는 것도 모두 변경된다. ( 중복 허용 )
 * 
 * 챗방에서 변경하면 자기가 들어왔던 것도 모두 변경되게 된다.
 * 
 * 
 * --- 생각 ---
 * 
 * 1. 일단 각 사람마다 객체를 통해 닉네임을 저장한다.
 * 2. 그리고 최종 닉네임을 저장한다.
 * 3. 주어진 record를 통해 uid를 가지고 출력한다.
 */

function solution(record) {
    const answer = [];
    const users = new Map();

    record.forEach((r, idx) => {
        const [status, id, name] = r.split(' ');

        record[idx] = [status, id, name];

        // ANCHOR: 나갈때 변경되는 일은 없다!!!!!!!!!!!
        if (status !== 'Leave') users.set(id, name);
    });

    record.forEach(([status, id, _]) => {

        const curUserName = users.get(id);

        if (status === 'Enter')
            answer.push(`${curUserName}님이 들어왔습니다.`);
        else if (status === 'Leave')
            answer.push(`${curUserName}님이 나갔습니다.`);
    });
    
    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));