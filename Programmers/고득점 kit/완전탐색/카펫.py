def solution(brown, yellow):
    answer = []
    
    sum = brown + yellow
    
    for i in range(2, sum):
        if sum % i == 0:
            answer.append(i)
    
    print(answer)
    
    return answer

solution(8, 1)
solution(10, 2)
solution(24, 24)
solution(18, 6)