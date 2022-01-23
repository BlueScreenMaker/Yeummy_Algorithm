def solution(tickets):
    answer = []
    need_visit = []
    route = {}
    count = 1
    
    for i in tickets:
        if i[0] in route:
            route[i[0]].append([i[1], i[0]])
            route[i[0]].sort(reverse=True)
        else:
            route[i[0]] = [[i[1], i[0]]]
            
    need_visit.append(route['ICN'][-1])
    answer.append('ICN')
    temp = []
    while need_visit:
        arrival, depart = need_visit.pop()
        idx: int = route[depart].index([arrival, depart])
        route[depart].pop(idx)
        answer.append(arrival)
        count += 1
        
        if arrival in route:
            for arr, dep in reversed(route[arrival]):
                if arr in route and len(route[arr]) != 0 and route[arr][-1][0] in route:
                    need_visit.append([arr, dep])
                    break
                elif count == len(tickets) -1:
                    need_visit.append([arr, dep])
                elif count == len(tickets):
                    answer.append(arr)
    answer.extend(temp)
    
    return answer

print(solution([["ICN", "AOO"], ["AOO", "BOO"], ["BOO", "COO"], ["COO", "DOO"], ["DOO", "EOO"], ["EOO", "DOO"], ["DOO", "COO"], ["COO", "BOO"], ["BOO", "AOO"]]) == ["ICN", "AOO", "BOO", "COO", "DOO", "EOO", "DOO", "COO", "BOO", "AOO"])
print(solution([["ICN", "AOO"], ["AOO", "BOO"], ["AOO", "COO"], ["COO", "AOO"], ["BOO", "ZOO"]]) == ["ICN", "AOO", "COO", "AOO", "BOO", "ZOO"])
print(solution([["ICN", "AOO"], ["AOO", "BOO"], ["AOO", "BOO"], ["BOO", "AOO"], ["BOO", "FOO"], ["FOO", "COO"], ["COO", "ZOO"]]) == ["ICN", "AOO", "BOO", "AOO", "BOO", "FOO", "COO", "ZOO"])
print(solution([["ICN", "BOO"], ["ICN", "COO"], ["COO", "DOO"], ["DOO", "COO"], ["BOO", "DOO"], ["DOO", "BOO"], ["BOO", "ICN"], ["COO", "BOO"]]) == ["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"])
print(solution([["ICN", "AAA"], ["ICN", "AAA"], ["ICN", "AAA"], ["AAA", "ICN"], ["AAA", "ICN"]]) == ["ICN", "AAA", "ICN", "AAA", "ICN", "AAA"])
print(solution([["ICN", "BBB"],["ICN", "CCC"],["BBB", "CCC"],["CCC", "BBB"],["CCC", "ICN"]]) == ["ICN", "BBB", "CCC", "ICN", "CCC", "BBB"])
print(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]) == ["ICN", "JFK", "HND", "IAD"])
print(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]) == ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"])
print(solution([["ICN", "AOO"], ["ICN", "AOO"], ["AOO", "ICN"], ["AOO", "COO"]]) == ["ICN", "AOO", "ICN", "AOO", "COO"])
print(solution([["ICN", "AAA"], ["ICN", "AAA"], ["ICN", "AAA"], ["AAA", "ICN"], ["AAA", "ICN"]]) == ["ICN", "AAA", "ICN", "AAA", "ICN", "AAA"])
print(solution([["ICN", "BOO"], ["ICN", "COO"], ["COO", "DOO"], ["DOO", "COO"], ["BOO", "DOO"], ["DOO", "BOO"], ["BOO", "ICN"], ["COO", "BOO"]]) == ["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"])
