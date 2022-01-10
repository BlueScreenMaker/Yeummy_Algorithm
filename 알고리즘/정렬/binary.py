def binary_search_recur(data, target):
    if len(data) == 0:
        return False
    elif len(data) == 1:
        return True if data[0] == target else False 
    
    mid = len(data) // 2
    
    if data[mid] == target:
        return True
    elif data[mid] > target:
        binary_search(data[:mid], target)
    elif data[mid] < target:
        binary_search(data[mid:], target)
        
def binary_search(data, target):
    data.sort()
    
    left = 0
    right = len(data) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if data[mid] == target:
            print(True)
            break
        elif data[mid] > target:
            right = mid - 1
        elif data[mid] < target:
            left = mid + 1
