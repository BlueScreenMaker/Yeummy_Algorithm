coin_list = [500, 100, 50, 1]

def min_coin_count(value, coin_list):
    total_coin_count = 0
    details = []
    coin_list.sort(reverse=True) # 왜냐하면, 리스트 들을 가장 큰 값 부터 비교하기 위해 내림차순 정렬
    for coin in coin_list:
        coin_num = value // coin # 현재 값에 500원을 몇개 사용 가능?
        total_coin_count += coin_num # 그걸 값에 더해
        value -= coin * coin_num # 500원으로 낼 수 있는 값을 빼
        details.append([coin, coin_num])
        
    return total_coin_count, details

print(min_coin_count(4720, coin_list))

