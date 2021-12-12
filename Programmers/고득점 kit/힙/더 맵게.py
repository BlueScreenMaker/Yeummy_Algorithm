import heapq

def solution(scoville, K) -> int:
    answer: int = 0
    heapq.heapify(scoville)
    
    while scoville[0] < K and len(scoville) > 1:
        first: int = heapq.heappop(scoville)
        second: int = heapq.heappop(scoville)

        new_food: int = first + (second * 2)

        heapq.heappush(scoville, new_food)

        answer += 1

    return answer if scoville[0] >= K else -1


scoville = [1, 2, 3, 9, 10, 12]
K = 7

print(solution(scoville, K))