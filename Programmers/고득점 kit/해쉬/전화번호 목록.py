from itertools import combinations

def solution(phone_book):
    answer: bool = True
    phone_book = sorted(phone_book)

    for i in combinations(phone_book, 2):
        if i[0] in i[1] and i[1][0] == i[0][0]:
            answer = False
            break

    return answer

print(solution(["119", "97674223", "1195524421"]))