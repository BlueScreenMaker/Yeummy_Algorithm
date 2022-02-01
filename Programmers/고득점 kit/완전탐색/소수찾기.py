import math
from itertools import permutations

def solution(numbers):
    answer = 0
    str = list(numbers)
    LIMIT = 10 ** len(str)
    combinations = []
    prime = [True for i in range(LIMIT + 1)]

    for i in range(2, int(math.sqrt(LIMIT)) + 1):
        if prime[i] == True:
            j = 2 
            while i * j <= LIMIT:
                prime[i * j] = False
                j += 1

    for i in range(1, len(str) + 1):
        combinations.append([int("".join(j)) for j in list(permutations(str, i))])
    
    for i in range(len(combinations)):
        for j in combinations[i]:
            if j != 0 and j != 1 and prime[j]:
                answer += 1
                prime[j] = False
            

    return answer


# print(solution("17"))
print(solution("011"))
