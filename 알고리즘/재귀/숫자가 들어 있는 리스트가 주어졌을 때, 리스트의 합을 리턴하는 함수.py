import random

data = random.sample(range(100), 10)

def sumF(data):
    sum: int = 0
    
    for i in data:
        sum = sum + i
    return sum

def sumR(data):
     if len(data) == 1:
         return data[0]
     return data[0] + sumR(data[1 :])
 
print(sumR(data))
    
    