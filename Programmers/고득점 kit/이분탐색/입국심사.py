def solution(n, times):
    answer = 0
    left, right = 1, max(times) * n
    
    while left <= right:
        
        mid = (left + right) // 2
        num_people = 0
        
        for time in times:
            num_people += mid // time
            
            if num_people >= n:
                break
        
        if num_people >= n:
            answer = mid
            right = mid - 1
        else:
            left = mid + 1
        
    return answer

print(solution(6, [7, 10]) == 28)