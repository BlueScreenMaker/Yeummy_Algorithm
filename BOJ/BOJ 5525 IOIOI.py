n: int = int(input())
m: int = int(input())
s: str = str(input())
ans: int = 0
count: int = 0
i: int =1

while i < m - 1:
    if s[i-1] == "I" and s[i] == "O" and s[i+1] == "I": # IOI 패턴
        count += 1 # 패턴이 맞으면 증가
        if count == n: # 만족해야할 패턴의 번수와 현재 패턴의 갯수가 일치
            count -= 1 # n이 1이면 상관없는데, n > 1 일 때, 다음 IOI가 있을 수 있기 때문에 -1
            ans += 1 # 정답 갯수 카운트
        i += 1 # 다음 인덱스
    else:
        count = 0 # 패턴이 끊키면 0으로 초기화
    i += 1

print(ans)

# def is_valid(idx: int):
#     count: int = 0
#     temp: int = 0
#     while idx + 2 <= m - 1 and s[idx] == 'I' and s[idx + 1] == 'O' and s[idx + 2] == 'I':
#         count += 1
#         idx += 2
#         if count == n:
#             temp += 1
#             break
#     return temp
#
# for i in range(0, m):
#     if s[i] == 'I':
#         ans += is_valid(i)
# print(ans)

