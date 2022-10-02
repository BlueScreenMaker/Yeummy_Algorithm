import heapq

def solution(no, works):
    
    if sum(works) < no: return 0
    
    max_heap = [(-i, i) for i in works ]        
    heapq.heapify(max_heap)
    
    for _ in range(no):
        max_val = heapq.heappop(max_heap)
        heapq.heappush(max_heap, (max_val[0] + 1, max_val[1] - 1)) 
        
    return sum([j ** 2 for _, j in max_heap])

print(solution(4, [4, 3, 3]))
# print(solution(2, [3, 3, 3]))
