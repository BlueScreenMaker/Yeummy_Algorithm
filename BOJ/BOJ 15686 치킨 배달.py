import sys
from itertools import combinations

N, M = map(int, sys.stdin.readline().split())
home: list = []
chicken: list = []
length: list = []

for i in range(N):
    for x, y in enumerate(sys.stdin.readline().split()):
        if int(y) == 1:
            home.append((int(i) + 1, int(x) + 1))
        elif int(y) == 2:
            chicken.append((int(i) + 1, int(x) + 1))

for i in list(combinations(chicken, M)):
    city_chicken_dist = 0
    for j in home:
        temp2: list = []
        for x, y in i:
            temp2.append(abs(x - j[0]) + abs(y - j[1]))
        city_chicken_dist += min(temp2)
    length.append(city_chicken_dist)

print(min(length))