mygraph= {
    'vertices': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    'edges': [
        (7, 'A', 'B'),
        (5, 'A', 'D'),
        (7, 'B', 'A'),
        (8, 'B', 'C'),
        (9, 'B', 'D'),
        (7, 'B', 'E'),
        (8, 'C', 'B'),
        (5, 'C', 'E'),
        (5, 'D', 'A'),
        (9, 'D', 'B'),
        (7, 'D', 'E'),
        (6, 'D', 'F'),
        (7, 'E', 'B'),
        (7, 'E', 'D'),
        (8, 'E', 'F'),
        (9, 'E', 'G'),
        (6, 'F', 'D'),
        (8, 'F', 'E'),
        (11, 'F', 'G'),
        (6, 'G', 'E'),
        (11, 'G', 'F'),
    ]
}

parent = {}
rank = {}

def find(node):
    # path compression 기법
    if parent[node] != node:
        parent[node] = find(parent[node])
    return parent[node]
        

def make_set(node):
    parent[node] = node
    rank[node] = 0

def union(node_v, node_u):
    root1 = find(node_v)
    root2 = find(node_u)
    
    if rank[root1] > rank[root2]:
        parent[root2] = root1
    else:
        parent[root1] = root2
        if rank[root1] == rank[root2]:
            rank[root2] += 1
    
def kruskal(graph):
    mst = []
    
    # 1. 초기화
    for node in graph['vertices']:
        make_set(node)
    
    # 2. 간선 weight 기반 sorting
    edges = graph['edges']
    edges.sort()
    
    # 3. 사이클 없는 간선만 연결
    for edge in edges:
        weight, node_v, node_u = edge
        
        # 이 두개의 노드의 루트노드가 다를때 (같으면 이 두개를 선택하면 안됨.)
        if find(node_v) != find(node_u):
            union(node_v, node_u) # union을 통해서 합친다.
            mst.append(edge)
    return mst
            
print(kruskal(mygraph))