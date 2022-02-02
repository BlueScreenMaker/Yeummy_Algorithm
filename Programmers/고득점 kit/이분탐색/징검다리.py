def solution(distance, rocks, n):
    answer = 0
    left, right = 0, distance
    rocks = sorted([*rocks, distance])

    while left <= right:
        mid = (left + right) // 2
        num_delete, cur_rock = 0, 0
        min_distance = float('inf')
        
        for rock in rocks:
            diff = rock - cur_rock
            if mid > diff:
                num_delete += 1
            else:
                cur_rock = rock
                min_distance = min(min_distance, diff)
            
        if num_delete > n:
            right = mid - 1
        else:
            answer = min_distance
            left = mid + 1           
    
    return answer


print(solution(25,[2, 14, 11, 21, 17], 2) == 4)