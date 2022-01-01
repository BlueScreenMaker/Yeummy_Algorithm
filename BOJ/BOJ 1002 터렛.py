import math

roop: int = int(input())

for _ in range(0, roop):
    x1, y1, r1, x2, y2, r2 = map(int, input().split())
    
    distance: int = math.sqrt((x1-x2)**2 + (y1-y2)**2)
    
    if x1 == x2 and y1 == y2 and r1 == r2:
        print(-1) # 무수히 만나는 경우
    elif abs(r1 - r2) > distance or r1 + r2 < distance:
        print(0) # 내접하는데, 떨어져 있는 경우, 완전히 떨어져 있는 경우
    elif r1 + r2 == distance or abs(r1 - r2) == distance:
        print(1) # 한 점만 만나는 경우
    elif abs(r1 - r2) < distance and r1 + r2 > distance:
        print(2) # 두 점에서 만나는 경우