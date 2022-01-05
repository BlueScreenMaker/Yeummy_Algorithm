def multipleF(num):
    num_val: int = 1
    
    for i in range(1, num + 1):
        num_val = num_val * i
    return num_val


def multipleR(num):
    
    if num > 1:
        return num * multipleR(num - 1)
    return num

print(multipleF(5))
print(multipleR(5))