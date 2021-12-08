import random

def bubble_sort(data):
    target: list = data

    for i in range(len(target) - 1):
        is_swap: bool = False
        for j in range((len(target) - i) - 1):
            if target[j] > target[j + 1]:
                is_swap = True
                target[j], target[j + 1] = target[j + 1], target[j]
            
        if is_swap == False:
                break
    return target

data_list: list = random.sample(range(100), 50)

print(bubble_sort(data_list))

