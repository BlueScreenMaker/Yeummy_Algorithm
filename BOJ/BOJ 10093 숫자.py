a, b = map(int, input().split())

if a > b:
    temp: int = a
    a, b = b, temp

arr = list([i for i in range(a+1, b)])

print(len(arr))
for i in arr:
    print(i, end=" ")