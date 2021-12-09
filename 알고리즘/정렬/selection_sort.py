import random

def selection_sort(data):

    for i in range(len(data) - 1): 
        target: int = i
        for j in range(i + 1, len(data)):
            if data[target] > data[j]:
                target = j

        if target != i:
            data[i], data[target] = data[target], data[i]

    return data

data_list: list = random.sample(range(100), 50)

print(selection_sort(data_list))

