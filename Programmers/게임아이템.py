from collections import deque

import heapq
def solution(healths, items):
    answer = []
    healths.sort()
    idx_items = sorted([(item[1], item[0], idx) for idx, item in enumerate(items, 1)])
    idx_items = deque(idx_items)
    
    item_save = []
    heapq.heapify(item_save)
    
    for hp in healths:
        while idx_items:
            damage, attack, idx = idx_items[0]
            if hp-damage < 100:
                break
            idx_items.popleft()

            heapq.heappush(item_save, (-attack, idx))
        if item_save:
            _, idx = heapq.heappop(item_save)
            answer.append(idx)
            
    return sorted(answer)

print(solution([200,120,150], [[30,100],[500,30],[100,400]]))
print(solution([300,200,500], [[1000, 600], [400, 500], [300, 100]]))
