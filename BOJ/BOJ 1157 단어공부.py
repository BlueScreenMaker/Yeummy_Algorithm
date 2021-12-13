import collections

words: str = input().upper()
count: dict = collections.defaultdict(int)

for i in words:
    count[i] += 1

max_val = [k for k,v in count.items() if max(count.values()) == v]

print( '?' if len(max_val) > 1 else max_val[0])