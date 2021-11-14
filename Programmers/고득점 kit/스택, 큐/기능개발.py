import math

def solution(progresses: list, speeds: list) -> list:
    answer: list = []
    work_day: list = [math.ceil((100 - a) / b) for a, b in zip(progresses, speeds)]
    prev: int = work_day[0]
    count: int = 0

    for i in work_day:
        if prev >= i:
            count += 1
        else:
            answer.append(count)
            count, prev = 1, i

    answer.append(count)
    return answer

progress: list = [99, 1, 99, 1]
speeds: list = [1, 1, 1, 1]

print(solution(progress, speeds))