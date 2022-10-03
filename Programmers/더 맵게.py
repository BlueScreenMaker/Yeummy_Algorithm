import heapq

def solution(scoville, K):
    answer: int = 0

    heapq.heapify(scoville)
    
    if len(scoville) == 1 and scoville[0] < K:
        return -1

    while scoville[0] <= K:
        mixed_scoville = heapq.heappop(scoville) + (heapq.heappop(scoville) * 2)
        heapq.heappush(scoville, mixed_scoville)
        answer += 1
        
        if len(scoville) == 0 and mixed_scoville < K:
            return -1
        
    return answer
        
        
        

print(solution([1, 2, 3, 9, 10, 12], 7))
