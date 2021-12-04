import sys

n: int = int(input())
sample: list = sorted(list(map(int, sys.stdin.readline().split())))
print(sample)
start: int = 0
end: int = n - 1
RES: int = 20_0000_0000
cur_start, cur_end = 0, 0

while start < end:
    temp: int = sample[start] + sample[end]

    if abs(temp) < RES:
        RES = abs(temp)
        cur_start = start
        cur_end = end

    if temp == 0:
        break

    if temp > 0:
        end -= 1
    else:
        start += 1

print(sample[cur_start], sample[cur_end])



