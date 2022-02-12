import sys

n = int(sys.stdin.readline())
array = [0] * 10001

for i in range(n):
    idx = sys.stdin.readline();
    array[idx] += 1

for i in range(10001):
    if array[i] != 0:
        for j in range(array[i]):
            print(i)