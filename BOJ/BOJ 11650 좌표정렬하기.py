N = int(input())

temp = []
for i in range(N):
    first, secound = map(int, input().split())
    temp.append([first, secound])
    
temp.sort()

for i in temp:
    print(f"{i[0]} {i[1]}")