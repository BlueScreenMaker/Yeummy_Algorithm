data_list = [(6, 13), (4, 8), (3, 6), (5, 12)]


data_list = sorted(data_list, key=lambda x: x[1] / x[0], reverse=True)

def get_max_value(data_list, capacity):

    data_list = sorted(data_list, key=lambda x: x[1] / x[0], reverse=True)
    total_value = 0
    details = []
    print(data_list)
    for data in data_list:

        if capacity - data[0] >= 0:
            capacity -= data[0]
            total_value += data[1]
            details.append([data[0], data[1]])
        
        else:
            print(capacity, data[0])
            fraction = capacity / data[0]
            print(1/4)
            total_value += data[1] * fraction 
            details.append([data[0], data[1], fraction])

            break
    return total_value

print(get_max_value(data_list, 7))
        
