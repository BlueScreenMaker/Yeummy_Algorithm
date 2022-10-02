import math

def solution(progresses, speeds):
    left_days: list = [math.ceil((100 - i) / j) for i, j in zip(progresses, speeds)]
    answer: list = []
    point_num: int = left_days[0]
    count: int = 0

    print(left_days)

    for day in left_days:
        # 기준점이 특정 날짜보다 크다면 카운트 값을 반영한다.
        if day > point_num:
            answer = [*answer, count]
            count = 1
            point_num = day
            continue

        count += 1

    return [*answer, count]

print(solution([93,30,55], [1,30,5]))
