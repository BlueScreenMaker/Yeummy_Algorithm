import random

def split(data):
    if len(data) <= 1:
        return data
    
    medium = int(len(data) // 2)
    left = split(data[:medium])
    right = split(data[medium:])
    
    return merge(left, right)

def merge(left, right):
    merged: list = []
    left_idx, right_idx = 0, 0
    
    while len(left) > left_idx and len(right) > right_idx:
        if left[left_idx] > right[right_idx]:
            merged.append(right[right_idx])
            right_idx += 1
        else:
            merged.append(left[left_idx])
            left_idx += 1
        
    while len(left) > left_idx:
        merged.append(left[left_idx])
        left_idx += 1
        
    while len(right) > right_idx:
        merged.append(right[right_idx])
        right_idx += 1
        
    return merged


data_list = random.sample(range(100), 10)

print(split(data_list))