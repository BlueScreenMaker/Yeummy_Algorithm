def solution(numbers, target) -> int:
    answer: int =  0
    need_visit = [[1, numbers[0]], [1, numbers[0] * -1]]
    
    while need_visit:
        node_idx, value = need_visit.pop()
        
        if node_idx < len(numbers):
            need_visit.append([node_idx + 1, value + numbers[node_idx]])
            need_visit.append([node_idx + 1, value - numbers[node_idx]])
        elif value == target: answer += 1
        
    return answer

print(solution([1, 1, 1, 1, 1], 3), 5)
print(solution([1, 2, 1, 2], 2), 3)
print(solution([1, 2, 1, 2], 6), 1)