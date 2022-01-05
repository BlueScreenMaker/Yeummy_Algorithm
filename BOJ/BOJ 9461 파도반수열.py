memo: list = [1 for i in range(100 + 1)]

for i in range(3, 100 + 1):
    memo[i] = memo[i - 3] + memo[i - 2]
  
num: int = int(input())

for i in range(num):
    idx = int(input())
    print(memo[idx - 1])