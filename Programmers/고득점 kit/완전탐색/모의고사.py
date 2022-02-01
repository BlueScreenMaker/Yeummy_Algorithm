
def solution(answers):
    answer = []
    
    stu_a = [1, 2, 3, 4, 5]
    stu_b = [2, 1, 2, 3, 2, 4, 2, 5]
    stu_c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    score = [0, 0, 0, 0]
    
    for ans in range(len(answers)):

        if answers[ans] == stu_a[ans %len(stu_a)]:
            score[1] += 1
        if answers[ans] == stu_b[ans %len(stu_b)]:
            score[2] += 1 
        if answers[ans] == stu_c[ans %len(stu_c)]:
            score[3] += 1
    
    
    max_score = max(score)
    
    return [i for i in range(len(score)) if score[i] == max_score]

print(solution([1,2,3,4,5]) == [1])
print(solution([1,3,2,4,2]) == [1,2,3])