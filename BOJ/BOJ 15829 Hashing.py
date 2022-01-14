
n = int(input())
str = input()
result = 0

for i in range(n):
    result = result + (ord(str[i])-96) * (31 ** i) 
    
print(result % 1234567891) 