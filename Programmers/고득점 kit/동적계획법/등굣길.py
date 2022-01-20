def solution(m, n, puddles) -> int:
    location: list = [[0] * (m + 1)  for i in range(n + 1)]    
    location[1][1] = 1
     
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if i == 1 and j == 1:
                continue
            if [j, i] not in puddles:
                location[i][j] = location[i - 1][j] + location[i][j - 1]
        
    return location[n][m] % 1000000007
            

m = 4
n = 3
puddles = [[2, 2]]


print(solution(m, n, puddles))