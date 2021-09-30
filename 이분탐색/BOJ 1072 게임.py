num_game, num_win = map(int, input().split())

def getRate(num: int = 0) -> int:
    return ((num_win + num) * 100) // (num_game + num)

start: int = 1
end: int = 1_000_000_000
cnt: int = -1

while start <= end:
    mid: int = (start + end) // 2
    if getRate() < getRate(mid):
        cnt = mid
        end = mid - 1
    else:
        start = mid + 1

print(cnt)