# def solution(N, number):
#     answer = -1
#     array: list = []
    
#     array = [set() for i in range(8)]
    
#     for i in range(8):
#         array[i].add(int(str(N) * (i+1)))

#     for i in array[0]:
#         array[1].add(i + i)
#         array[1].add(i - i)
#         array[1].add(i * i)
#         array[1].add(i // i)
    
#     for i in range(2, 9):
#         for j in array[i - 2]: 
#             for k in array[i - 1]:
#                 array[i].add(j + k)
#                 array[i].add(j - k)
#                 array[i].add(j * k)
                
#                 if k != 0:
#                     array[i].add(j // k)
#         if number in array:
#             answer = i
#             break

#     return answer



def solution(N, number):
    answer = -1
    dp = []
    
    for i in range (1,9) : 
    # i = N의 개수
        all_case = set()
        check_number = int(str(N)* i)
        # {N}, {NN} , {NNN}...
        all_case.add(check_number)
        
        for j in range(0,i-1):
        #j 개를 사용해서 만든 값들
            for op1 in dp[j]:
                for op2 in dp[-j-1] :
                    all_case.add(op1 - op2)
                    all_case.add(op1 + op2)
                    all_case.add(op1 * op2)
                    if op2 != 0:
                        all_case.add(op1 // op2)
                        
        if number in all_case:
            answer = i
            break
            
        dp.append(all_case) 
        

    return answer

N = 5
number = 12

print(solution(N, number))