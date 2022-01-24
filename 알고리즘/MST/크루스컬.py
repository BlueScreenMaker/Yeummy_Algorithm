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

# "~의 노드의 부모는 ~이다"를 나타내는 것
parent = {}

rank = {}

def make_set(node):
    # 초기에는 아무것도 연결 안되어 있으니, 내가 부모 노드가 됨
    parent[node] = node
    # 랭크를 0
    rank[node] = 0

def find(node):
    # path compression 기법
    if parent[node] != node: # 만약, 나의 부모가 내가 아니면 (즉, 내가 부모를 가지고 있을 때)
        parent[node] = find(parent[node]) # 나의 루트 노드를 반환 ( 즉, 최종적인 루트 노드로만 연결하기 위해 )
    return parent[node]
        

def union(node_v, node_u):
    root1 = find(node_v)
    root2 = find(node_u)
    # 랭크가 다르다면, 랭크가 더 큰놈에 작은놈을 붙임
    if rank[root1] > rank[root2]:
        parent[root2] = root1
    else:
        # 일단 붙이고 랭크를 높여준다.
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
        # 왜냐하면 싸이클이 생기니까!
        if find(node_v) != find(node_u):
            union(node_v, node_u) # union을 두개의 노드를 하나의 집합으로 합친다.
            mst.append(edge) # 정상이라면 해당 간선을 푸쉬
    return mst
            
print(kruskal(mygraph))