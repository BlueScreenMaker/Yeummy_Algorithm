import heapq

def solution(n, works):
    left_work: list = []
    
    for work in works:
        heapq.heappush(left_work, (-work, work))
    
    for _ in range(n):
        if left_work[0][1] == 0:
            break
        
        work = heapq.heappop(left_work)
        heapq.heappush(left_work, (work[0] + 1, work[1] - 1))
        
    return sum([work[1] ** 2 for work in left_work])

print(solution(4, [4, 3, 3]))
