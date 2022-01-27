
def is_available(candidate, current_col):
    current_row = len(candidate)
    for queen_row in range(current_row):
        # 들어가 있는 값의 열과 바로 이후의 열이 같거나 (수평)
        # 들어가 있는 값의 열과 바로 이후의 열의 차이가 1이 나거나
        # 들어가 있는 값의 행과 바로 이후의 행의 차이가 1이 나면 (대각선)
        if candidate[queen_row] == current_col or abs(candidate[queen_row] - current_col) == current_row - queen_row:
            return False
    return True

def DFS(N, current_row, current_candidate, final_result):
    # 현재의 row가 N과 같다는 말은 모든 순회가 다 끝났다는 말. (왜냐하면 0 ~ N-1이기 때문)
    if current_row == N:
        # 마지막 행이라면 값을 넣고 끝냄
        final_result.append(current_candidate[:])
        return
    
    # N개의 열이 있고 그걸 하나씩 체크하겠다.
    for candidate_col in range(N):
        if is_available(current_candidate, candidate_col):
            current_candidate.append(candidate_col)
            DFS(N, current_row + 1, current_candidate, final_result)
            current_candidate.pop()
        

def solution(N):
    final_result = []
    DFS(N, 0, [], final_result)
    return final_result


solution(4)