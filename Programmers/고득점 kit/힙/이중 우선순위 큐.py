import heapq

def solution(operations):
    max_heap = []
    min_heap = []
    
    for i in operations:
        operation = i[0]
        target = int(i[1:])
        
        if operation == 'I':
            heapq.heappush(max_heap, (-target, target))
            heapq.heappush(min_heap, target)
        else:
            if len(max_heap) == 0:
                continue
            
            if target == 1:
                value = heapq.heappop(max_heap)
                min_heap.remove(value[1])
            else:
                value = heapq.heappop(min_heap)
                max_heap.remove((-value, value))
        
    return [0, 0] if len(max_heap) == 0 and len(min_heap) == 0 else [heapq.heappop(max_heap)[1],heapq.heappop(min_heap)]


# operations = ["I 16","D 1"]
operations = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]


print(solution(operations))