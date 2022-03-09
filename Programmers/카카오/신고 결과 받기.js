
function solution(id_list, report, k) {
    const answer = Array(id_list.length).fill(0);
    const reportLog = new Map();
    
    
    report.forEach(r => {
        const [repoter, target] = r.split(' ');
        
        if (!reportLog.has(target)) {
            reportLog.set(target, {count: 1, reporters: [repoter]});

            return;
        }
    
        const prevLog = reportLog.get(target);

        if (!prevLog.reporters.includes(repoter)) {
            prevLog.reporters.push(repoter);

            reportLog.set(
                target, 
                {
                    ...prevLog, 
                    count: prevLog.count + 1,
                    reporters: prevLog.reporters
                }
            );
        }
    });

    reportLog.forEach(val => {
        const {count, reporters} = val;

        if (count >= k) {
            reporters.forEach(reporter => {
                const idx = id_list.indexOf(reporter);
                answer[idx] += 1;
            });
        }
    });

    return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2));
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));