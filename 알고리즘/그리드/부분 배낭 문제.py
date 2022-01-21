data_list = [(10, 10), (15, 12), (20, 10), (25, 8), (30, 5)]

# 가치 / 무계를 통해 정렬을 수행하겠다.
data_list = sorted(data_list, key=lambda x: x[1] / x[0], reverse=True)

def get_max_value(data_list, capacity):
    # 가치 / 무계를 통해 정렬을 수행하겠다.
    data_list = sorted(data_list, key=lambda x: x[1] / x[0], reverse=True)
    total_value = 0
    details = []
    
    for data in data_list:
        # 현재 넣은 물건을 온전히 전부 넣을 수 있음?
        if capacity - data[0] >= 0:
            capacity -= data[0]
            total_value += data[1]
            details.append([data[0], data[1]])
        # 현재 물건 전부를 넣을 수 없는 경우
        else:
            # capacity / 물건의 무계를 함으로써, 비율을 구함
            fraction = capacity / data[0]
            # 해당 비율을 구한 다음 물건의 가치를 그 만큼 가방에 추가한다.
            total_value += data[1] * fraction 
            details.append([data[0], data[1], fraction])
            # 이제 더 이상 넣을 수 없기 때문에 그 이상 할 필요 없다.
            break
    return total_value

print(get_max_value(data_list, 30))
        
