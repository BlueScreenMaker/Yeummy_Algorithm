def solution(s):
    answer: int = 999999
    LENGTH: int = len(s)

    if LENGTH == 1 or LENGTH == 2: return LENGTH

    for i in range(LENGTH - 1, 0, -1):
        current_str: str = ''
        temp_str: str = ''
        continue_count: int = 0
        # 문자열 길이만큼 자른다.
        sliced_str: list = [s[j:j+i] for j in range(0, LENGTH, i)]

        for str in sliced_str:
            if str == temp_str:
                continue_count += 1
                continue

            if str != temp_str and continue_count > 0:
                current_str += '{}{}'.format(continue_count, temp_str) if continue_count > 1 else temp_str

            temp_str = str
            continue_count = 1

        current_str += '{}{}'.format(continue_count, temp_str) if continue_count > 1 else temp_str
        answer = min(answer, len(current_str))
        
    return answer

print(solution('ababcdcdababcdcd'))
