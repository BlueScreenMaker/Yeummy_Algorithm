from collections import defaultdict

def dfs(length, answer, current_route, is_visited, route):
    if len(current_route) == length + 1:
        for route in current_route:
            answer.append(route)
            
        return 
    
    depart = current_route[-1]
    
    for idx, arrival in enumerate(route[depart]):
        if [depart, arrival, idx] not in is_visited and len(answer) != length + 1:
            current_route.append(arrival)
            is_visited.append([depart, arrival, idx])
            dfs(length, answer, current_route, is_visited, route)
            current_route.pop()
            is_visited.pop()

def solution(tickets):
    answer = []
    is_visited = []
    route = defaultdict(list)
    length = len(tickets)
    
    for ticket in tickets:
        depart, arrival = ticket[0], ticket[1]
        route[depart].append(arrival)
        route[depart].sort()
    
    dfs(length, answer, ['ICN'], is_visited, route)
    
    return answer

# print(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]])==["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"])
# print(solution([["ICN", "AOO"], ["AOO", "BOO"], ["BOO", "COO"], ["COO", "DOO"], ["DOO", "EOO"], ["EOO", "DOO"], ["DOO", "COO"], ["COO", "BOO"], ["BOO", "AOO"]]) == ["ICN", "AOO", "BOO", "COO", "DOO", "EOO", "DOO", "COO", "BOO", "AOO"])
# print(solution([["ICN", "AOO"], ["AOO", "BOO"], ["AOO", "COO"], ["COO", "AOO"], ["BOO", "ZOO"]]) == ["ICN", "AOO", "COO", "AOO", "BOO", "ZOO"])
print(solution([["ICN", "AOO"], ["AOO", "BOO"], ["AOO", "BOO"], ["BOO", "AOO"], ["BOO", "FOO"], ["FOO", "COO"], ["COO", "ZOO"]]) == ["ICN", "AOO", "BOO", "AOO", "BOO", "FOO", "COO", "ZOO"])
# print(solution([["ICN", "BOO"], ["ICN", "COO"], ["COO", "DOO"], ["DOO", "COO"], ["BOO", "DOO"], ["DOO", "BOO"], ["BOO", "ICN"], ["COO", "BOO"]]) == ["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"])
print(solution([["ICN", "AAA"], ["ICN", "AAA"], ["ICN", "AAA"], ["AAA", "ICN"], ["AAA", "ICN"]]) == ["ICN", "AAA", "ICN", "AAA", "ICN", "AAA"])
# print(solution([["ICN", "BBB"],["ICN", "CCC"],["BBB", "CCC"],["CCC", "BBB"],["CCC", "ICN"]]) == ["ICN", "BBB", "CCC", "ICN", "CCC", "BBB"])
# print(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]) == ["ICN", "JFK", "HND", "IAD"])
# print(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]) == ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"])
print(solution([["ICN", "AOO"], ["ICN", "AOO"], ["AOO", "ICN"], ["AOO", "COO"]]) == ["ICN", "AOO", "ICN", "AOO", "COO"])
print(solution([["ICN", "AAA"], ["ICN", "AAA"], ["ICN", "AAA"], ["AAA", "ICN"], ["AAA", "ICN"]]) == ["ICN", "AAA", "ICN", "AAA", "ICN", "AAA"])
# print(solution([["ICN", "BOO"], ["ICN", "COO"], ["COO", "DOO"], ["DOO", "COO"], ["BOO", "DOO"], ["DOO", "BOO"], ["BOO", "ICN"], ["COO", "BOO"]]) == ["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"])
