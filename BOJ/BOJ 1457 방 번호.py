room_num: int = input()

arr: list = [0] * 10

for i in room_num:
    num: int = int(i)
    if num == 6 and arr[6] > arr[9]:
        arr[9] += 1
    elif num == 9 and arr[9] > arr[6]:
        arr[6] += 1
    else:
        arr[num] += 1

print(max(arr))