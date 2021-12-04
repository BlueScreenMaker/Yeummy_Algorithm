from sys import stdin
n_times: int = int(input())

for _ in range(n_times):
    is_valid: int = 0
    brackets: str = list(input())

    for bracket in brackets:
        if bracket == '(':
            is_valid += 1
        else:
            is_valid -= 1
            if is_valid < 0: break

    if is_valid == 0:
        print('YES')
    else:
        print('NO')