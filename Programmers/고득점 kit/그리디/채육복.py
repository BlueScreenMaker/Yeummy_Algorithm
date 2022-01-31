def solution(n, lost, reserve):
    answer: int = n
    idx: int = 0
    
    lost_stu: list = sorted(list(set(lost[:]) - set(reserve[:])))
    reserve_stu: list = sorted(list(set(reserve[:]) - set(lost[:])))
    length: int = len(reserve_stu)
         
    for i in lost_stu:
        found: bool = False
        for j in range(idx, length):
            if j < length and abs(i - reserve_stu[j]) == 1:
                found = True
                idx += 1
                break
        if found == False:
            answer -= 1
     
    return answer         

print(solution(5, [2, 4], [1, 3, 5]) == 5)
print(solution(5, [2, 4], [3]) == 4)
print(solution(3, [3], [1]) == 2)
print(solution(6, [2, 3, 5], [1, 2, 4, 6]) == 6)
print(solution(5, [1, 2, 3], [2, 3, 4]) == 4)
print(solution(5, [2, 3, 4], [1, 2, 3]) == 4)

list1 = set([1, 2, 3])
list2 = set([1, 2, 3, 4])


temp = list1 - list2
temp2 = list2 - list1


