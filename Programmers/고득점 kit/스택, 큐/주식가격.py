def solution(prices) -> list:
    answer: list = [0] * len(prices)
    length: int = len(prices)

    for i in range(length):
        for j in prices[i + 1:]:
            answer[i] += 1
            if prices[i] > j:
                break

    return answer


prices = [1, 2, 3, 2, 3, 1]

solution(prices)