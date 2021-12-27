# def solution(jobs) -> int:
#     length: int = len(jobs)
#     jobs_list = sorted(jobs, key=lambda schedule: schedule[1])
    
#     first_schedule: list = jobs_list.pop(0)
#     current_time: int = first_schedule[0] + first_schedule[1]
#     scheduling_time: int = first_schedule[1]
    
    
#     while len(jobs_list):
#         current_schedule: list = jobs_list.pop(0)
#         delay_time: int = current_time - current_schedule[0]
#         scheduling_time += delay_time + current_schedule[1]
#         current_time += current_schedule[1]
    
#     return scheduling_time // length

# temp = [[0, 3], [1, 9], [2, 6]]

# print(solution(temp))

def solution(jobs) -> int:
    length: int = len(jobs)
    jobs_list = sorted(jobs, key=lambda schedule: schedule[1])
    
    current_time: int  = 0
    scheduling_time: int  = 0
    
    
    while len(jobs_list):
        schedule = jobs_list.pop(0)
        
        if current_time > schedule[0]:
            delay: int = current_time - schedule[0]
            scheduling_time += ( delay + schedule[1] )
            current_time += schedule[1]
        else:
            if current_time < schedule[0]:
                idle = schedule[0] - current_time
                current_time += idle
            else:
                current_time += schedule[1]
                
            scheduling_time += schedule[1]
        
    return scheduling_time // length 
    
temp = [[0, 3], [1, 9], [2, 6]]

print(solution(temp))