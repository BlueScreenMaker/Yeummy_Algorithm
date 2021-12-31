arr: list = []

while True:
    text = input()
    
    if text == '.':
        break
    
    for i in text:
        if i == '(' or i == '[':
            arr.append(i)
        elif i == ')':
            if len(arr) != 0 and arr[-1] == '(':
                arr.pop()
            else:
                arr.append(i)
                break
        elif i == ']':
            if len(arr) != 0 and arr[-1] == '[':
                arr.pop()
            else:
                arr.append(i)
                break
        elif i == '.':
            break        
    
    if len(arr) == 0:
        print('yes')
    else:
        print('no')
    arr.clear()
