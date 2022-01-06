memo: list = [0] * 1000001

memo[1], memo[2] = 1, 2

for i in range(3, len(memo)):
    memo[i] = (memo[i - 1] + memo[i - 2]) % 15746
    
print(memo[int(input())])
