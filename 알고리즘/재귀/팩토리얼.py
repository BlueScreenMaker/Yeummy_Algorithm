def factorial(n):
    if n > 1:
        return  n * factorial(n - 1)
    else:
        return n
    
for i in range(10):
    print(factorial(i))
