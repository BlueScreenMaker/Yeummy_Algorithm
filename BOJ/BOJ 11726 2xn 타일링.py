num: int = int(input())

memo: list = [0 for i in range(1000 + 1)]

memo[1], memo[2] = 1, 2

if num == 1 or num == 2:
    print(memo[num])
else:
    for i in range(3, num + 1):
        memo[i] = memo[i - 1] + memo[i - 2]
    print(memo[num] % 10007)
        