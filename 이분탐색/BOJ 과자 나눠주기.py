## https://www.notion.so/BOJ-16401-f180efcd81694396b58d637b245ba24b


M, N = map(int, input().split())
snacks = list(map(int, input().split()))

start, end, can_eat = 1, max(snacks), 0

while start <= end:
    mid = (start + end) // 2

    if sum([n // mid for n in snacks]) >= M:
        can_eat = mid
        start = mid + 1
    else:
        end = mid - 1

print(can_eat)