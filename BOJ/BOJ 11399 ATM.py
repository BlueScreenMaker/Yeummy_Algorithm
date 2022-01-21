N: int = int(input())
P: list = sorted(list(map(int, input().split())))
total_time: int = 0
memo: list = [0] * len(P)
memo[0] = P[0]


for i in range(1, len(P)):
    memo[i] = memo[i - 1] + P[i]
    
print(sum(memo))