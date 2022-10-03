def bfs(x, y, current_color, image, visited):
    delta = [(0, 1), (0, -1), (1, 0), (-1, 0)]
    
    for dx, dy in delta:
        nx, ny = x + dx, y + dy
        if (0 <= nx < len(image) and 0 <= ny < len(image[0])) and (image[nx][ny] == current_color) and not visited[nx][ny]:
            visited[nx][ny] = True
            bfs(nx, ny, current_color, image, visited)
    

def solution(n, m, image):
    answer = 0
    is_visited = [[False] * m for _ in range(n)]
    
    for i in range(n):
        for j in range(m):
            if not is_visited[i][j]:
                is_visited[i][j] = True
                bfs(i, j, image[i][j], image, is_visited)
                answer += 1
    
    return answer


print(solution(2, 3, [[1, 2, 3], [3, 2, 1]]))
print(solution(3, 2, [[1, 2], [1, 2], [4, 5]]))
print(solution(3, 3, [[1, 2, 3], [3, 2, 1], [1, 2, 3]]))
