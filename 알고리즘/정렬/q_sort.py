import random

def qsort(data):
    if len(data) <= 1:
        return data
    
    left, right = [], []
    pivot = data[0]
    
    for index in range(1, len(data)):
        if data[index] > pivot:
            left.append(data[index])
        else:
            right.append(data[index])
    
    return qsort(right) + [pivot] + qsort(left)

data_list = random.sample(range(100), 10)

print(qsort(data_list))