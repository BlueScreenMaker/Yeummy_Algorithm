def solution(priorities: list, location: int):
    print_list = [(v, i) for i, v in enumerate(priorities)]
    target: tuple = (priorities[location], location)
    length: int = len(print_list)
    idx: int = 0

    while idx < length -1:
        
        if print_list[idx][0] < max(print_list[idx + 1:])[0]:
            print_list.append(print_list[idx])
            del print_list[idx]
            idx -= 1
        
        idx += 1
        
    
    return print_list.index(target) + 1


priorities = [2, 1, 3, 2]
location = 2

print(solution(priorities, location))

