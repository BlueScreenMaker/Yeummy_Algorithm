# stack: list = list(input())
# cal: list = []
# count: int = 0

# for i in range(len(stack) - 1): 

#     if stack[i] == '(':
#         if stack[i + 1] == ']':
#             print(0)
#             break
        
#         if stack[i + 1] == ')':
#             cal.append(['+', 2])
        
#         if stack[i + 1] == '(' or stack[i + 1] == '[':
#             cal.append(['*', 2])

#     if stack[i] == '[':
#         if stack[i + 1] == ')':
#             print(0)
#             break


def transformExpr(expr):
    op = [] #연산자들을 담아두는 stack
    newExpr = ''
    for ch in expr:
        if ch == '(': #여는 괄호가 나올 경우 다음 글자로 진행합니다.
            continue
        elif ch >= 'a' and ch <= 'z': #피연산자가 등장하면 그대로 결과 표현에 붙여줍니다.
            newExpr += ch
        elif ch == ')': #닫는 괄호가 나올 경우 표현이 끝난 것이므로 마지막으로 stack에 넣어놨던 연산자를 빼서 붙여줍니다.
            newExpr += op.pop()
        else: #연산자가 등장할 경우 stack에 넣어줍니다.
            op.append(ch)
    return newExpr


print(transformExpr('a*(a+(b*b))'))