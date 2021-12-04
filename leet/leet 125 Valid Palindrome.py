class Solution:
    def isPalindrome(self, s: str) -> bool:
        arr = "".join([i.lower() for i in s if i.isalnum()])
        for i in range(0, len(arr) // 2):
            if arr[i] == arr[-i + -1]:
                continue
            else:
                return False
        return True
