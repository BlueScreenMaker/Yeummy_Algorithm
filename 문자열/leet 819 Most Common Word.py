import collections

class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        parse_str: [str] = [word for word in re.sub(r'[^\w]', ' ', paragraph).lower().split() if word not in banned]
        frequency: {} = collections.defaultdict(int)
        for word in parse_str:
            if word not in banned:
                frequency[word] += 1

        return max(frequency, key=frequency.get)
#
# import collections
#
# class Solution:
#     def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
#         parse_str: [str] = [word for word in re.sub(r'[^\w]', ' ', paragraph).lower().split() if word not in banned]
#
#         counts = collections.Counter(parse_str);
#
#         return counts.most_common(1)[0][0]