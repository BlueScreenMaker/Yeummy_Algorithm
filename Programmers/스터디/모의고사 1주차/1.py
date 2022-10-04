from collections import deque

def bfs(graph, queue, m, n, VACCINATED, INFECT):
    max_value = 0
    deltas: list = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    while len(queue):
        row, col, time = queue.popleft()

        for delta in deltas:
            next_row: int = row + delta[0]
            next_col: int = col + delta[1]

            if (next_row < 0 or next_row >= m) or (next_col < 0 or next_col >= n):
                continue

            if graph[next_row][next_col] == VACCINATED or graph[next_row][next_col] == INFECT or graph[next_row][
                next_col] != 0:
                continue

            # 값을 반영한다.
            graph[next_row][next_col] = time + 1
            max_value = max(max_value, time + 1)
            # 큐에 넣는다.
            queue.append([next_row, next_col, time + 1])

    return max_value


def solution(m, n, infests, vaccinateds):
    # 이차원 배열을 만든다.
    graph: list = [[0] * n for _ in range(m)]
    queue = deque()
    VACCINATED: str = 'V'
    INFECT: str = 'I'

    if len(infests) + len(vaccinateds) == m * n:
        return 0

    for infest in infests:
        row, col = infest
        graph[row - 1][col - 1] = INFECT
        queue.append([row - 1, col - 1, 0])

    for vaccinated in vaccinateds:
        row, col = vaccinated
        graph[row - 1][col - 1] = VACCINATED

    value = bfs(graph, queue, m, n, VACCINATED, INFECT)

    return -1 if value == 0 else value

print(solution(2, 4, [[1, 4], [2, 2]], [[1, 2]]))
print(solution(2, 3, [[2, 2]], [[1, 2], [2, 1], [2, 3]]))
print(solution(2, 2, [[1, 1], [2, 2]], [[1, 2], [2, 1]]))
print(solution(2, 2, [[1, 1], [1, 2]], [[2, 1]]))
