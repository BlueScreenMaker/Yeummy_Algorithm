def solution(num):
    
    if num == 1:
        return num
    
    if num % 2 != 0:
        return solution(num // 2)
    else:
        return solution(3 * (num + 1))
        
print(solution(3))