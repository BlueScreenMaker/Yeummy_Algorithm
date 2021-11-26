import math

def solution(progresses: list, speeds: list) -> list:
    answer: list = []
    work_day: list = [math.ceil((100 - a) / b) for a, b in zip(progresses, speeds)]
    prev: int = work_day[0]
    count: int = 0

    print(work_day)

    for i in work_day:
        if prev >= i:
            count += 1
        else:
            answer.append(count)
            count, prev = 1, i

    answer.append(count)
    return answer

progress: list = [93, 30, 55]
speeds: list = [1, 30, 5]

print(solution(progress, speeds))