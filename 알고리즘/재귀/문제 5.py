def solution(num):
    if num <= 1:
        return 1
    if num == 2:
        return 2
    return solution(num - 1) + solution(num - 2) + solution(num - 3)

print(solution(4))
    