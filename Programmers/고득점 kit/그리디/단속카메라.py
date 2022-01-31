def solution(routes):
    answer: int = 0
    idx: int = 0
    length: int = len(routes)
    
    routes.sort(reverse=True)
    
    while idx < length:
        if routes[idx] == -1:
            idx += 1
            continue
        
        cur_node_entry_point: int = routes[idx][0]
        
        for node in range(idx + 1, len(routes)):
            if routes[node] != -1 and cur_node_entry_point <= routes[node][1]:
                if node - idx == 1:
                    idx += 1
                routes[node] = -1
            
        idx += 1    
        answer += 1
            
    
    return answer

print(solution([[-100,100],[50,170],[150,200],[-50,-10],[10,20],[30,40]]) == 4)
print(solution([[-2,-1], [1,2],[-3,0]]) == 2) #2
print(solution([[0,0],]) == 1) #1
print(solution([[0,1], [0,1], [1,2]]) == 1) #1
print(solution([[0,1], [2,3], [4,5], [6,7]]) == 4) #4
print(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]]) == 2) #2
print(solution([[-20,15], [-14,-5], [-18,-13], [-5,-3]]) == 2) #2
print(solution([[-20,15], [-20,-15], [-14,-5], [-18,-13], [-5,-3]]) == 2) #2
print(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]]) == 2)