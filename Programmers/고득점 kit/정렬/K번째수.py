def solution(array, commands):
    answer = []
    length: int = len(commands)
    
    for i in range(length):
        arr = array[commands[i][0] - 1 : commands[i][1] ]
        arr.sort()
        answer.append(arr[commands[i][2] - 1] )
    
    return answer

array: list = [1, 5, 2, 6, 3, 7, 4]
commands: list = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
print(solution(array, commands))
