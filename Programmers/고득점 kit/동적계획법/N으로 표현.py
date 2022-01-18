def solution(N, number):
    answer = -1
    array: list = []
    
    array = [set() for i in range(8)]
    
    for i in range(8):
        array[i].add(int(str(N) * (i+1)))

    for i in array[0]:
        array[1].add(i + i)
        array[1].add(i - i)
        array[1].add(i * i)
        array[1].add(i // i)
    
    for i in range(2, 9):
        for j in array[i - 2]:
            for k in array[i - 1]:
                array[i].add(j + k)
                array[i].add(j - k)
                array[i].add(j * k)
                
                if k != 0:
                    array[i].add(j // k)
        if number in array:
            answer = i
            break

    return answer
    
N = 5
number = 31168

print(solution(N, number))