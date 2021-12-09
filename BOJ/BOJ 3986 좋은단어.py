import sys
input = sys.stdin.readline
 
n = int(input())
cnt = 0
 
for _ in range(n):
    s = input().rstrip()
    stack: list = []

    for i in s:
        if len(stack) == 0 or stack[-1] != i:
            stack.append(i)
        elif stack[-1] == i:
            stack.pop()
    
    if len(stack) == 0:
        cnt += 1

print(cnt)