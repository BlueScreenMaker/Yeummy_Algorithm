def solution(number, k):
    answer = []
    for num in number:
        while k != 0 and len(answer) != 0 and answer[-1] < num:
            answer.pop()
            k -= 1
        answer.append(num)
    return ''.join(answer[:len(answer) - k])

print(solution("1924", 2) == "94")
print(solution("1231234", 3) == "3234")
print(solution("4177252841", 4) == "775841")