count = int(input())

stack: list = []
print_list: list = []
current: int = 1
is_no: bool = False

while count != 0:
    target_num: int = int(input())

    while current <= target_num:
        stack.append(current)
        print_list.append('+')
        current += 1
    
    if stack[-1] == target_num:
        stack.pop()
        print_list.append('-')

    elif stack[-1] < target_num or target_num < current:
        print("NO")
        is_no = True
        break
    
    count -= 1


if is_no != True:
    for i in print_list:
        print(i)


    

