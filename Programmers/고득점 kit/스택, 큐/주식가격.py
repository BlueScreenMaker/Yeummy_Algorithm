def solution(prices) -> list:
    answer: list = [0] * len(prices) # 임시 배열을 만듦
    length: int = len(prices)
    
    for i in range(length):
        for j in prices[i + 1:]: # 현재 주식가격 이후의 배열 슬라이싱
            answer[i] += 1
            if prices[i] > j:
                break

    return answer


prices = [1, 2, 3, 2, 3, 1]

solution(prices)