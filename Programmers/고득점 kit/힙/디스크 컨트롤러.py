import heapq

def solution(jobs):
    job_list = [(v, i) for i, v in (jobs)]
    heapq.heapify(job_list)
    
    schdule = heapq.heappop(job_list)
    sum_time = schdule[0]
    cur_time = schdule[0] + schdule[1]
    
    while len(job_list) != 0:
        waiting_schdule = []
        
        for i in range(len(job_list)):
            if cur_time > job_list[i][1]:
                waiting_schdule.append(job_list.pop(i))
                if i != 0:
                    i -= 1
            else:
                break

        while len(waiting_schdule) != 0:
            schdule = heapq.heappop(waiting_schdule)
            delay_time = cur_time - schdule[1]
            cur_time += schdule[0]
            sum_time += delay_time + schdule[0]
            
            
    return sum_time // len(jobs)
    

temp = [[0, 3], [1, 9], [2, 6]]


print(solution(temp))