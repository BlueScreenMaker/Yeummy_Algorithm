
def solution(jobs) -> int:
    length: int = len(jobs)
    
    jobs_list = []
    current_time: int  = 0
    scheduling_time: int  = 0
    
    
    while True:
        isCollapsed: bool = False
        for i in jobs:
            if i[0] < current_time:
                isCollapsed = True
                jobs_list.append(i)
                jobs.remove(i)

        if isCollapsed == False or current_time == jobs[0][0]:
            jobs_list.append(jobs[0])
            jobs.pop(0)
            
        
        
            
                            
        # if current_time > schedule[0]:
        #     delay: int = current_time - schedule[0]
        #     scheduling_time += ( delay + schedule[1] )
        #     current_time += schedule[1]
        # else:
        #     if current_time < schedule[0]:
        #         idle = schedule[0] - current_time
        #         current_time += idle
                
        #     scheduling_time += schedule[1]
        #     current_time += schedule[1]
        
    # return scheduling_time // length 
    
temp = [[0, 3], [1, 9], [2, 6]]

print(solution(temp))


# [[0, 3], [1, 9], [2, 6]]    9
# [[1, 9], [1, 4], [1, 5], [1, 7], [1, 3]]    13
# [[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]]    13
# [[0, 3], [0, 1], [4, 7]]    4
# [[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]]    13
# [[0, 1], [0, 1], [1, 0]]    1
# [[0, 5], [1, 2], [5, 5]]    6
# [[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]]    13
# [[0, 1], [1, 2], [500, 6]]      3
# [[0, 10], [4, 10], [5, 11], [15, 2]]    15
# [[0, 10]]   10
# [[1, 10], [3, 3], [10, 3]]      9
# [[0, 10], [2, 3], [9, 3]]   9
# [[0, 3], [4, 3], [10, 3]]   3
# [[0, 10], [2, 10], [25, 10], [25, 2]]   10
# [[0, 3], [1, 9], [2, 6], [4, 3]]    9
# [[0, 4], [0, 3], [0, 2], [0, 1]]    5
# [[24, 10], [28, 39], [43, 20], [37, 5], [47, 22], [20, 47], [15, 34], [15, 2], [35, 43], [26, 1]]   72
# [[0, 10], [4, 10], [15, 2], [5, 11]]    15