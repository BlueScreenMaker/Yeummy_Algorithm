import heapq
import sys

ans: int = 0
num: int = int(sys.stdin.readline())
card_array: int = []

for _ in range(num):
    heapq.heappush(card_array, int(sys.stdin.readline()))


for i in range(num - 1):
    min_card: int = heapq.heappop(card_array)

    secound_min_card = heapq.heappop(card_array)

    ans += min_card + secound_min_card
    
    heapq.heappush(card_array, min_card + secound_min_card)
    
print(ans);