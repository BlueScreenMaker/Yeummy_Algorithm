
def find(parent, node):
    if parent[node] != node:
        parent[node] = find(parent, parent[node])
    return parent[node]

def union(parent, rank, node_v, node_u):
    root1 = find(parent, node_v)
    root2 = find(parent, node_u)
    
    if rank[root1] > rank[root2]:
        parent[root2] = root1
    else:
        parent[root1] = root2
        if rank[root1] == rank[root2]:
            rank[root2] += 1

def solution(n, costs):
    answer: int = 0
    parent: dict = {}
    rank: dict = {}
    
    for node in range(n):
        parent[node] = node
        rank[node] = 0
    
    costs.sort(key=lambda x:x[2])
    
    for edge in costs:
        node_v, node_u, weight = edge
     
        if find(parent, node_v) != find(parent, node_u):
            union(parent, rank, node_v, node_u)
            answer += weight
    
    return answer
    
    
print(solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]) == 4)
print(solution(5, [[0, 1, 5], [1, 2, 3], [2, 3, 3], [3, 1, 2], [3, 0, 4], [2, 4, 6], [4, 0, 7]]) == 15)
print(solution(5, [[0, 1, 1], [3, 4, 1], [1, 2, 2], [2, 3, 4]]) == 8)
print(solution(4, [[0, 1, 5], [1, 2, 3], [2, 3, 3], [1, 3, 2], [0, 3, 4]]) == 9)
print(solution(5, [[0, 1, 1], [3, 1, 1], [0, 2, 2], [0, 3, 2], [0, 4, 100]]) == 104)
print(solution(6, [[0, 1, 5], [0, 3, 2], [0, 4, 3], [1, 4, 1], [3, 4, 10], [1, 2, 2], [2, 5, 3], [4, 5, 4]]) == 11)
print(solution(5, [[0, 1, 1], [2, 3, 1], [3, 4, 2], [1, 2, 2], [0, 4, 100]]) == 6)
print(solution(5, [[0, 1, 1], [0, 4, 5], [2, 4, 1], [2, 3, 1], [3, 4, 1]]) == 8)
print(solution(5, [[0, 1, 1], [0, 2, 2], [0, 3, 3], [0, 4, 4], [1, 3, 1]]) == 8)

