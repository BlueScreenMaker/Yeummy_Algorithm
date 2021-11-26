def solution(participant, completion) -> str: 
    answer: str = ''
    participant_list: list = {}

    for i in participant:
        if i not in participant_list:
            participant_list[i] = 1
        else:
            participant_list[i] += 1

    for i in completion:
        participant_list[i] -= 1
    
    for i in participant_list:
        if participant_list[i] != 0:
            answer = i        

    return answer

participant = ["mislav", "stanko", "mislav", "ana"]
completion = ["stanko", "ana", "mislav"]

print(solution(participant, completion))