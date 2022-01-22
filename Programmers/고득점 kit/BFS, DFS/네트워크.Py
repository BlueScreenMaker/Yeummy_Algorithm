def solution(n, computers):
    answer = 0
    
    need_visit = []
    is_visited = [False] * n
 
    while all(is_visited) != True:
        need_visit.append(is_visited.index(False))       
        while need_visit:
            node = need_visit.pop()
            is_visited[node] = True
            for i in range(n):
                if  i != node and computers[node][i] == 1 and is_visited[i] != True:
                    is_visited[i] = True
                    need_visit.append(i)
                    
        answer += 1
        
    return answer


print(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
print(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))