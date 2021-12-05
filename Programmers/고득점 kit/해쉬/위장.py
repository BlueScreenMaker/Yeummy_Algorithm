def solution(clothes)-> int:
    answer: int = 1
    clothes_dict: dict = {}
    
    for elem in clothes:
        if clothes_dict.get(elem[1]):
            clothes_dict[elem[1]] += 1
        else:
            clothes_dict[elem[1]] = 2

    cloth_count: int = clothes_dict.values()

    for i in cloth_count:
        answer *= i

    return answer - 1
clothes = [["a", "headgear"], ["c", "eyewear"], ["b", "headgear"], ["d", "pants"], ["e", "pants"], ["f", "pants"]]

print(solution(clothes))