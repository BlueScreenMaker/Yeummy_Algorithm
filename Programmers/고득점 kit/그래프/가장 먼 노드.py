def solution(n, edge):
    depth_list: list = [0] * (n + 1)
    graph: list = [[] for _ in range(n + 1) ]
    edge.sort(key=lambda x: x)
    
    for i in edge:
        node_a, node_b = i[0], i[1]
        graph[node_a].append(node_b)
        graph[node_b].append(node_a)
        
    visited: list = []
    need_visit: list = []
    
    need_visit.append([1, 0])
    
    while need_visit:
        node, depth = need_visit.pop(0)
        
        if node not in visited:
            depth_list[node] = depth
            visited.append(node)
            for i in graph[node]:
                need_visit.append([i, depth + 1])  
                      
    
    return depth_list.count(max(depth_list))


print(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]) == 3)
print(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]) == 3)
print(solution(11, [[1, 2], [1, 3], [2, 4], [2, 5], [3, 5], [3, 6], [4, 8], [4, 9], [5, 9], [5, 10], [6, 10], [6, 11]]) == 4)
print(solution(4, [[1, 2], [2, 3], [3, 4]])== 1)
print(solution(2, [[1, 2]]) == 1)
print(solution(5, [[4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]) == 2)
print(solution(4, [[1, 2], [1, 3], [2, 3], [2, 4], [3, 4]]) == 1)
print(solution(4, [[1, 4], [1, 3], [2, 3], [2, 1]]) == 3)
print(solution(4, [[3, 4], [1, 3], [2, 3], [2, 1]]) == 1)
print(solution(4, [[4, 3], [1, 3], [2, 3]]) == 2)