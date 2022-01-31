def solution(people, limit):
    answer: int = 0
    maximum: int = 0
    minimum: int = len(people) - 1
    people.sort(reverse=True)

    while maximum < minimum:
        if people[maximum] + people[minimum] <= limit:
            maximum += 1
            minimum -= 1
        else:
            maximum += 1
        answer += 1
        
    if maximum == minimum:
        answer += 1
        
    return answer

print(solution([40, 40, 80], 160) == 2)
print(solution([100,500,500,900,950], 1000) == 3)
print(solution([70, 50, 80, 50], 100) == 3)
print(solution([70, 80, 50], 100) == 3)


