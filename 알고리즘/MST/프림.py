from collections import defaultdict
from heapq import *

myedges = [
     (7, 'A', 'B'), (5, 'A', 'D'),
     (8, 'B', 'C'), (9, 'B', 'D'), (7, 'B', 'E'),
     (5, 'C', 'E'),
     (7, 'D', 'E'), (6, 'D', 'F'),
     (8, 'E', 'F'), (9, 'E', 'G'),
     (11, 'F', 'G')
 ]

def prim(start, edges):
    mst = []
    adjacent_edges = defaultdict(list)
    # 간선 정보를 담는다.
    for weight, n1, n2 in edges:
        # 해당 간선이 어디에서 어디로 이어져 있는지 알기위해..
        # 그러니까, 노드당 간선이 어떻게 연결되어 있는지를 저장
        adjacent_edges[n1].append((weight, n1, n2))
        adjacent_edges[n2].append((weight, n2, n1))
    
    # 중복되지 않게 넣어주기 위해, 연결된 노드를 집합으로 표현한다.
    connected_nodes = set(start)
    # 선택된 간선을 저장해야 하기 때문에 시작 리스트에 넣는다. 
    # ex ) candidate_edge_list = [(7, A, B), (5, A, D)]
    candidate_edge_list = adjacent_edges[start]
    # 그리고 최소 간선 순대로 뽑아야 하기 때문에 힙으로 만듦
    heapify(candidate_edge_list) 
    
    while candidate_edge_list:
        weight, n1, n2 = heappop(candidate_edge_list)
        # 만약에, 해당 노드가 선택된 노드라면
        if n2 not in connected_nodes:
            # 노드를 추가한다.
            connected_nodes.add(n2)
            mst.append((weight, n1, n2))
        
        # 해당 노드와 연결된 간선을 선택하기 위해
        # 해당 노드와 연결된 간선으로 반복문을 돈다.
        for edge in adjacent_edges[n2]:
            # 그리고 만약, 간선으로 연결된 것이 있다면 
            # 사이클이 발생할 수 있기 때문에 넣지 않는다. 
            if edge[2] not in connected_nodes:
                heappush(candidate_edge_list, edge)
    return mst


prim('A', myedges)