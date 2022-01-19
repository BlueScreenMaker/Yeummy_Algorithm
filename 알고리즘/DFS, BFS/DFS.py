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

def dfs(graph, start_node):
    visited, need_visit = [], [] # 두개 모두 스택으로 구성한다.
    need_visit.append(start_node)
    
    while need_visit:
        node = need_visit.pop() # 가장 뒤에 있는 것을 뺀다.
        if node not in visited: # 만약, 뺀 것이 방문하지 않았다면
            visited.append(node) # 추가하고
            need_visit.extend(graph[node]) # 다음 노드의 깊이를 추가한다.

    return visited

print(dfs(graph, 'A'))