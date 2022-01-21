import heapq

mygraph = {
    'A': {'B': 8, 'C': 1, 'D': 2},
    'B': {},
    'C': {'B': 5, 'D': 2},
    'D': {'E': 3, 'F': 5},
    'E': {'F': 1},
    'F': {'A': 5} 
}

def dijkstra(graph, start):
    # 거리를 저장할 객체 생성
    # {'A': inf, 'B': inf, 'C': inf, 'D': inf, 'E': inf, 'F': inf}
    distances = {node: float('INF') for node in graph} 
    distances[start] = 0
    queue = [] # 우선순위 큐
    
    heapq.heappush(queue, [distances[start], start]) # 우선순위에 (A, 0)을 저장
    
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        
        # 만약, 더이상 업데이트를 할 필요 없다면 스킵
        if distances[current_node] < current_distance:
            continue
        
        # 해당 노드의 인접 노드를 순회돈다.
        for adjacent, weight in graph[current_node].items():
            distance = current_distance + weight
            # 현재 계산된 거리가 기존에 있는 거리 보다 작으면 업데이트
            if distance < distances[adjacent]:
                distances[adjacent] = distance
                heapq.heappush(queue, [distance, adjacent]) # 업데이트 하고 queue에 저장
    
    return distances

print(dijkstra(mygraph, 'A'))