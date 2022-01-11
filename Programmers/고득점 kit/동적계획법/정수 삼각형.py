
def solution(triangle):
    answer: list = []
    length: int = len(triangle) - 1
    
    def recursion(x, y, cost):
        
        if length == x:
            return cost + triangle[x][y]
        
        return max(recursion(x + 1, y, cost + triangle[x][y]), recursion(x + 1, y + 1, cost + triangle[x][y]))
        
    return recursion(0, 0, 0)

triangle: list = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]
print(solution(triangle))
