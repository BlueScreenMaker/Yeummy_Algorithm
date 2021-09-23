row, column = map(int, input().split())
arr = [ input() for _ in range(row)]

start, end, isOverlap, res = 0, row, False, 0

while start <= end:
    mid = (start + end) // 2

    strings = []
    for i in range(column):
        temp = ''
        for j in range(mid, row):
            temp += arr[j][i]
        if temp in strings:
            isOverlap = True
            break
        else:
            strings.append(temp)

    if isOverlap:
        end = mid - 1
    else:
        res = mid
        start = mid + 1

    isOverlap = False

print(res)