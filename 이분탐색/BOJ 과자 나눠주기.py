## 2021.09.21

"""
명절이 되면 홍익이 집에 조카가 놀러옴 떼를 달래기 위해 막대 과자 하나씩을 나눠줌.

먹는 동안은 떼를 쓰지 않기에 최대한 긴 것을 나눠주려고 함.

만약, 각기 나눠준 과자의 길이가 다르면 싸움 남. -> 같은 길이되, 최대한 길게 줘야 함.

M명의 조카가 있고 N개의 과자가 있을 떄, 조카 1명에게 줄 수 있는 막대 과자의 최대 길이를 구하라.

단, 막대 과자는 길이와 상관없이 여러 조각으로 나눌 수 있지만 이를 하나로 합칠 수는 없다.

막대 과자의 길이는 양의 정수여야 함.

## 입력 조건
M: 조카의 수, N: 과자의 수

## 출력 조건
첫째 줄에 조카 1명에게 줄 수 있는 막대 과자의 최대 길이를 출력

만약, 같은 길이의 과자를 나눠줄 수 없다면 0을 출력
"""

M, N = map(int, input().split())
snacks = list(map(int, input().split()))

start, end, can_eat = 1, max(snacks), 0

# while start <= end:
#     mid = (start + end) // 2
#     eat_num = sum([n // mid for n in snacks])
#
#     if eat_num == M:
#         can_eat = mid
#         break
#     elif eat_num > M:
#         start += mid + 1
#     else:
#         end = mid - 1

while start <= end:
    mid = (start + end) // 2

    if sum([n // mid for n in snacks]) >= M:
        can_eat = mid
        start = mid + 1
    else:
        end = mid - 1

print(can_eat)