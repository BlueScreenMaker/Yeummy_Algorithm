graph = dict()

graph['A'] = ['B', 'C']
graph['B'] = ['A', 'D']
graph['C'] = ['A', 'G', 'H', 'I']
graph['D'] = ['B', 'E', 'F']
graph['E'] = ['D']
graph['F'] = ['D']
graph['G'] = ['C']
graph['H'] = ['C']
graph['I'] = ['C', 'J']
graph['J'] = ['I']

def bfs(graph, start_node):
    visited = []
    need_visit = []
    
    need_visit.append(start_node)
    
    while need_visit: # 방문할 노드가 있는지?
        node = need_visit.pop(0)
        if node not in visited: # 해당 노드가 방문을 하지 않았다면?
            visited.append(node) # 노드 방문을 알리고
            need_visit.extend(graph[node]) # 노드를 합친다.
        
    return visited
    
    
print(bfs(graph, 'A'))
